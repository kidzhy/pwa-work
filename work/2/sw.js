self.addEventListener("fetch",function(evt){
  console.log("Fetch request for:",evt.request.url);
});