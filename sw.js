const CACHE_NAME = 'nope-v53';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/app-data.js',
  './data/products-db.js',
  './data/mood-palettes.js',
  './data/affiliate-links.js',
  './data/supabase-config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './assets/tones/white-minimal.png',
  './assets/tones/oak-natural.png',
  './assets/tones/walnut-vintage.png',
  './assets/tones/steel-modern.png',
  './assets/tones/butter-pastel.png',
  './assets/tones/sage-terracotta.png',
  './assets/quiz/floor-jangpan.png',
  './assets/quiz/floor-wood.png',
  './assets/quiz/floor-tile.png',
  './assets/quiz/mat-steel.png',
  './assets/quiz/mat-wood.png',
  './assets/quiz/mat-fabric.png',
  './assets/quiz/light-mood.png',
  './assets/quiz/light-bright.png',
  './assets/quiz/light-basic.png'
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
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
