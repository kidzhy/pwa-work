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
});