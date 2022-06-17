let container2=document.querySelector(".container2");
let topelement=document.querySelector(".para");
let randomhihi=document.querySelector(".random")



gsap.fromTo(container2, {opacity: 0}, {opacity: 1, duration: 1});
gsap.fromTo(topelement, {opacity:0,x:-800},{opacity:1,x:0,duration:2});
gsap.fromTo(randomhihi, {opacity:0,y:400},{opacity:1,y:0,duration:2});