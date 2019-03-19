self.addEventListener("install",function(){
  console.log("安装");
});

self.addEventListener("activate",function(){
  console.log("完成");
});

self.addEventListener("fetch",function(evt){
  console.log("请求响应中");
});