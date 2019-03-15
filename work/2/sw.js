self.addEventListener("fetch",function(evt){
  //打印所有页面发起请求的记录
  console.log("Fetch request for:",evt.request.url);

  if(evt.request.url.includes("style.css")){
    evt.respondWith(
      new Response(
        ".pwa{background:green}",
        {headers:{"Content-type":"text/css"}}
      )
    )
  }
});