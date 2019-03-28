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
  const requestURL = new URL(evt.request.url);
  if(requestURL.pathname==="/"||requestURL.pathname==="index.html"){
    evt.respondWith(
      caches.open("v1").then(cache=>{
        return cache.match("index.html").then(cachedResponse=>{
          const fetchPromise = fetch("index.html").then(networkResponse=>{
            cache.put("index.html",networkResponse.clone())
            return networkResponse;
          })
          return cachedResponse||fetchPromise;
        })
      })
    )
  }else if(CACHE_URLS.includes(requestURL.href)||CACHE_URLS.includes(requestURL.pathname)){
    evt.respondWith(
      caches.open("v1").then(cache=>{
        return cache.match(evt.request).then(response=>{
          return response||fetch(evt.request)
        })
      })
    )
  }
});