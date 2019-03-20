var CACHE_NAME = "v1";
var CACHED_URLS = [
  "index.html",
  "404.html",
  "img/1.png",
  "css/style/css"
];

self.addEventListener("install",function(evt){
  console.log("安装");
  evt.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CACHED_URLS);
    })
  )
});

self.addEventListener("activate",function(){
  console.log("激活中");
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