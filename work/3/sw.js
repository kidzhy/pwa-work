self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.add("404.html");
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
