const STATIC_CACHE_NAME = 'static-cache-v1.1.5';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1.5';
const urlsToCache = [
  '/',
  '/admins/screens/CapturistList',
  '/admins/screens/RegisterCapturist',
  // Otras rutas estáticas si las necesitas
];

// Evento de instalación: Guardamos las rutas estáticas
self.addEventListener('install', function (event) {
  console.log('SW Registrado e instalando...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.error('Error al almacenar en caché estático:', err);
      });
    })
  );
});

// Evento de activación: Limpieza de cachés antiguas
self.addEventListener('activate', event => {
  console.log('SW Activado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Evento fetch: Manejo de rutas dinámicas y fallback
self.addEventListener('fetch', function (event) {
  if (event.request.url.includes('/api/')) {
    // Exclusión de rutas de API
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response('No se pudo obtener datos de la API', { status: 503 });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // Devuelve del caché si existe
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está en caché, intenta la red y almacena en el caché dinámico
        return fetch(event.request)
          .then(response => {
            // Verifica si la respuesta es válida antes de almacenarla
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch(() => {
            // Fallback a `index.html` para rutas no encontradas (SPA)
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
    );
  }
});
