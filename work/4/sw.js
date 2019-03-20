self.addEventListener("install",function(){
  console.log("安装");
});

self.addEventListener("activate",function(){
  console.log("激活中");
});

self.addEventListener("fetch",function(evt){
  console.log("请求响应中");
  console.log(evt.request.url);
});