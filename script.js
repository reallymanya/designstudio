
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


function loco(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

scroll.on("click")


var elems = document.querySelectorAll(".elem")
var pg = document.querySelector("#page2")
elems.forEach(function(ele){
   ele.addEventListener("mouseenter",function(){
    var bg = ele.getAttribute("data-img");
     pg.style.backgroundImage = `url(${bg})`;
   })
})

document.querySelector("#footer .ri-arrow-up-s-line").addEventListener("click",() =>{
  scroll.scrollTo(0)
})

document.querySelector("#footer h2").addEventListener("click",() =>{
  scroll.scrollTo(0)
})
}


loco();


// Simple Bento Layout - Just subtle height variations
function createSimpleBento() {
    const imgDivs = document.querySelectorAll('#img-div');
    
    // Simple height variations - just 3 different sizes
    const heights = ['400px', '600px', '500px']; // Small, Medium, Large
    
    imgDivs.forEach((imgDiv, index) => {
        const heightIndex = index % heights.length;
        imgDiv.style.height = heights[heightIndex];
        imgDiv.style.transition = 'height 0.3s ease';
    });
}

// Apply the simple bento layout
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createSimpleBento();
    }, 500);
});


