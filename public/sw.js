const STATIC_CACHE_NAME = 'static-cache-v1.1.7';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1.7';
const urlsToCache = [
  '/',
  '/_nuxt/admins/screens/CapturistList',
  '/_nuxt/admins/screens/RegisterCapturist',
  '/_nuxt/admins/screens/ClientForm',
  '/_nuxt/admins/screens/ManageDocument',
  '/_nuxt/admins/screens/ManagerCapturist',
  '/_nuxt/admins/screens/RegisterCapturist',
];

// Evento de instalación: Guardamos las rutas estáticas
self.addEventListener('install', function (event) {
  console.log('SW Registrado e instalando...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(async cache => {
      try {
        await cache.addAll(urlsToCache);
        console.log('Rutas estáticas almacenadas correctamente.');
      } catch (err) {
        console.error('Error al agregar rutas al caché estático:', err);
      }
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
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response('No se pudo obtener datos de la API', { status: 503 });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch(() => {
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
    );
  }
});
