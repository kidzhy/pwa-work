self.addEventListener("sync",evt=>{
  if(evt.tag==="message-queue-sync"){
    evt.waitUntil(
      fetch("https://cnodejs.org/api/v1/topics")
    )
  }
});