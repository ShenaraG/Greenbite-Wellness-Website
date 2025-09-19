
const CACHE_NAME = 'greenbite-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Makes sure it activates immediately
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});


self.addEventListener('fetch', (event) => {

  event.respondWith(fetch(event.request));
});
