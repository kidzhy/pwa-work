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
  evt.respendWidth(
    caches.match(evt.request).then(response=>{
      return response||fetch(evt.request)
    })
  )
})