const CACHE_NAME = "v2";
const CACHED_URLS = [
  "index.html",
  "404.html",
  "img/1.png",
  "css/style/css"
];

self.addEventListener("install",function(evt){
  evt.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CACHED_URLS);
    })
  )
});


self.addEventListener("fetch",function(evt){
  console.log("请求响应中");
  console.log(evt.request.url);
  evt.respondWith(
    fetch(evt.request).catch(function(){
      return caches.match(evt.request).then(function(response){
        if(response){
          return response
        }else if(evt.request.headers.get("accept").includes("text/html")){
          return caches.match("404.html")
        }
      })
    })
  )
});