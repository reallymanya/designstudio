
function loading(){
var tl = gsap.timeline();

tl.to("#yellow1", {
  top: "-100%",
  delay: 0.5,
  duration: 0.7,
  ease: "expo.out",
});

tl.from("#yellow2", {
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out",
  },"anim"
);

tl.to("#loader h1",{
    color: "black",
    delay: 0.6,
    duration: 0.7,
  }, "anim"
);

tl.to("#loader", {
 opacity: 0
});

tl.to("#loader", {
 display: "none"
});
}

loading();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elems = document.querySelectorAll(".elem")
var pg = document.querySelector("#page2")
elems.forEach(function(ele){
   ele.addEventListener("mouseenter",function(){
    var bg = ele.getAttribute("data-img");
     pg.style.backgroundImage = `url(${bg})`;
   })
})