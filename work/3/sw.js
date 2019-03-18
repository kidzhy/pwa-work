const CACHE_NAME = "v1";
const CACHE_URLS = [
  "index.html",
  "404.html",
  "css/style.css",
  "img/1.png"
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
      return caches.match(evt.request).then(function(cache){
        if(cache){
          return cache;
        }else if(evt.request.headers.get("accept").includes("text/html")){
          return cache.match("404.html");
        }
      })
    })
  );
});
