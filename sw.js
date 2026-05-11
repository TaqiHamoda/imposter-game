const CACHE_NAME = 'imposter-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'data.json',
  'icon-512.png',
  'icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache local critical assets securely
      cache.addAll(ASSETS);
      // Attempt to cache Tailwind CDN separately without rejecting the entire installation
      fetch('https://cdn.tailwindcss.com', { mode: 'no-cors' })
        .then(response => cache.put('https://cdn.tailwindcss.com', response))
        .catch(() => console.log('Tailwind CDN cached skipped/offline.'));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
