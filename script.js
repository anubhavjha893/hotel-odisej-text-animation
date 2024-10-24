var h1 = document.querySelectorAll("h1");

h1.forEach((elem)=> {
var clutter =""
var h1Text = elem.textContent;
var splitted = h1Text.split("");
splitted.forEach((e)=> {
 clutter += `<span>${e}</span>`
})
elem.innerHTML = clutter
})



gsap.to(".page2 h1 span",{
color : "#E3E3C4",
duration : 2,
stagger: 0.1,
scrollTrigger : {
    trigger : ".page2",
    scroller : "body",
    start : 'top 40%',
    end :'bottom 100%',
    scrub: 2
}
})