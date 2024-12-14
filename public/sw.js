DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1.4';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/admins/screens/CapturistList',        
        // Agrega tus rutas estáticas generadas
      ]);
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== DYNAMIC_CACHE_NAME;
        }).map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('/api/')) {
    // Si la solicitud es para "/api/", no la almacenamos en caché.
    event.respondWith(
      fetch(event.request).catch(() => {
        // En caso de error en la red, devuelve un error adecuado o una respuesta vacía.
        return new Response('No se pudo obtener datos de la API', { status: 503 });
      })
    );
  } else {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Si obtenemos una respuesta exitosa, almacenamos en el caché dinámico.
          return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone()); // Almacena la respuesta en caché.
            return response;
          });
        })
        .catch(() => {
          // Si falla la red, buscamos en el caché dinámico.
          return caches.match(event.request).then(response => {
            return response || caches.match('/index.html'); // Fallback a index.html si está disponible.
          });
        })
    );
  }
});
