const CACHE_NAME = 'finance-gold-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './gold-logo.png' // <-- Muy importante para que el icono cargue siempre
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
