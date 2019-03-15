self.addEventListener("fetch",function(evt){
  //打印所有页面发起请求的记录
  console.log("Fetch request for:",evt.request.url);

  // //拦截style.css并修改内容
  // if(evt.request.url.includes("style.css")){
  //   evt.respondWith(
  //     new Response(
  //       ".pwa{background:green}",
  //       {headers:{"Content-type":"text/css"}}
  //     )
  //   )
  // }
  // //拦截一张图片换成另一张
  // if(evt.request.url.includes("1.png")){
  //   evt.respondWith(
  //     fetch("img/2.png").catch(e=>{
  //       console.log(e);
  //     })
  //   )
  // }

  //友好提示html离线页面
  evt.respondWith(
    fetch(evt.request).catch(()=>{
      return new Response(
        `<html><head><meta charset="UTF-8" /><title>离线了</title></head><body><h1 style="color:red">你好，你离线了</h1></body></html>`,
        {headers:{"Content-type":"text/html"}}
      )
    })
  )

});