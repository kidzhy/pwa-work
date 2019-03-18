self.addEventListener("install",function(evt){
  evt.waitUntil(
    caches.open("v1").then(function(cache){
      return cache.add("404.html")
    })
  )
});