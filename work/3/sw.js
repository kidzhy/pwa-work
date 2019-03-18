const CACHE_NAME = "v1";
const CACHE_URLS = [
  "index.html",
  "404.html",
  // "css",
  // "css/style.css",
  // "img",
  // "img/1.png"
];
self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CACHE_URLS);
    })
  );
});

self.addEventListener("fetch", function(evt) {
  evt.respondWith(
    fetch(evt.request).catch(function() {
      return caches.match("404.html");
    })
  );
});
