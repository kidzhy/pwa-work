const CACHE_URLS = [
  "index.html",
  "css/style.css",
  "img/1.png",
  "js/main.js"
]

self.addEventListener("install",evt=>{
  evt.waitUntil(
    caches.open("v1").then(cache=>{
      cache.addAll(CACHE_URLS);
    })
  )
});

self.addEventListener("fetch",evt=>{
  evt.respondWith(
    caches.open("v1").then(cache=>{
      return fetch(evt.request).then(networkResponse=>{
        cache.put(evt.request,networkResponse.clone());
        return networkResponse;
      }).catch(()=>{
        return caches.match(event.request);
      })
    })
  )
});