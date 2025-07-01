// Service Worker für Globify Radio PWA
const CACHE_NAME = 'globify-radio-v1';
const ASSETS_TO_CACHE = [
  '/Globify/',
  '/Globify/index.html',
  '/Globify/style.css',
  '/Globify/carousel.css',
  '/Globify/responsive.css',
  '/Globify/app.js',
  '/Globify/carousel.js',
  '/Globify/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Service Worker Installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Service Worker Activation (Clean up old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => {
          return name !== CACHE_NAME;
        }).map((name) => {
          return caches.delete(name);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First Strategy for Static Assets
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests (like radio streams)
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('cdnjs.cloudflare.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Return from cache if available
        }
        
        // Otherwise fetch from network
        return fetch(event.request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response as it can only be consumed once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Handle offline functionality
self.addEventListener('fetch', (event) => {
  // For radio stream URLs, don't try to cache but handle network errors
  if (event.request.url.includes('.mp3') || 
      event.request.url.includes('.m3u') || 
      event.request.url.includes('.pls') ||
      event.request.url.includes('stream')) {
    
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          JSON.stringify({ 
            error: 'Netzwerkfehler', 
            message: 'Keine Internetverbindung verfügbar. Bitte überprüfen Sie Ihre Verbindung.' 
          }),
          { 
            headers: { 'Content-Type': 'application/json' } 
          }
        );
      })
    );
  }
});
