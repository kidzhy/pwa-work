self.addEventListener("fetch",function(evt){
  //打印所有页面发起请求的记录
  console.log("Fetch request for:",evt.request.url);

  //拦截style.css并修改内容
  if(evt.request.url.includes("style.css")){
    evt.respondWith(
      new Response(
        ".pwa{background:green}",
        {headers:{"Content-type":"text/css"}}
      )
    )
  }
  //拦截一张图片换成另一张
  if(evt.request.url.includes("1.png")){
    evt.respondWith(
      fetch("img/2.png")
    )
  }
});