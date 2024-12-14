
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1.8';
const STATIC_CACHE_NAME = 'static-cache-v1.1.8';
const urlsToCache = [
  '/admins/screens/CapturistList',
  '/admins/screens/RegisterCapturist',
  '/admins/screens/ClientForm',
];

self.addEventListener('install', function (event) {
  console.log('SW Registrado e instalando...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(async cache => {
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          console.log(`Ruta almacenada correctamente: ${url}`);
        } catch (err) {
          console.error(`Error al almacenar la ruta ${url}:`, err);
        }
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
