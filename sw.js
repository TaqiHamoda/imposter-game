const CACHE_NAME = 'imposter-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'data.json',
  'icon-512.png',
  'icon-192.png',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
