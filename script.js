window.sr = ScrollReveal({reset: true})


sr.reveal('.area-1',{duration: 1000})
sr.reveal('.area-2',{
    duration: 2000,
    rotate:{x: 0, y:80, z:0}
})
sr.reveal('.area-3',{
    duration: 2000,
    rotate:{x: 0, y:100, z:0}
})

sr.reveal('.module',{duration: 1000})





document.addEventListener("DOMContentLoaded",function () {
  setTimeout(function () {
   
   
  document.getElementsByClassName("loading")[0].style.display="none";
  document.getElementsByClassName("box")[0].style.display="block";
  
  },3000)


})
