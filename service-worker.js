const CACHE_NAME = 'convoy-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/static/js/main.*.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});