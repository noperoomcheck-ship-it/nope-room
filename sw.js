const CACHE_NAME = 'nope-v103';
const ASSETS = [
  './',
  './index.html',
  './privacy.html',
  './terms.html',
  './styles.css',
  './app.js',
  './data/app-data.js',
  './data/quiz-visuals.js',
  './data/products-db.js',
  './data/mood-palettes.js',
  './data/affiliate-links.js',
  './data/supabase-config.js',
  './data/analytics-config.js',
  './data/brand-trends.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/og-share.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
