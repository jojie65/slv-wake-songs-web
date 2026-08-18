/* ---------------------------------------------------------------
   SLV Wake Songs — service worker

   This is what makes the app actually work offline: on first
   visit (while online), it saves a private copy of every file
   listed in APP_SHELL. From then on, every request first checks
   that saved copy before ever touching the network — so with zero
   signal, the app still opens and every song still works.

   TO PUBLISH AN UPDATE: bump the number in CACHE_NAME below
   (v1 -> v2 -> v3 ...) any time you change index.html, style.css,
   or script.js. That's what tells phones "there's a newer version,
   replace your saved copy" — without bumping it, an offline phone
   would keep the old version forever, even after you push new
   songs to GitHub.
------------------------------------------------------------------ */
const CACHE_NAME = "slv-wake-songs-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match("./index.html"));
    })
  );
});