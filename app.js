//add cursor function

// Front-page fade in Effect
gsap.fromTo(
    ".namecard h2", 
        { opacity: 0 }, 
            { opacity: 1, 
                duration: 1, 
                delay: 3.5,
            });

gsap.fromTo(
    ".namecard h3",
        { opacity: 0}, 
            { opacity: 1, 
                duration: 1, 
                delay: 3.7, 
            });


     // make second scroll animation looks better 


gsap.fromTo(
    ".ghostegg",
    { opacity: 0 },
    { 
        opacity: 1,
        scrollTrigger:{
            scrub: "true",
            start:"0%",
            end: "100%",
            //markers: true,
        },
        onComplete: () => {
            gsap.to(".ghostegg", 
            { opacity: 0 });
        },
       
    }
);

gsap.fromTo(
    ".cloud img",
    { opacity: 0 },
    { 
        opacity: 1,
        scrollTrigger:{
            scrub: "true",
            start:"50%",
            end: "100%",
            //markers: true,
        },
        onComplete: () => {
            gsap.to(".ghostegg", 
            { opacity: 0 });
        },
       
    }
);


//second-page animation

const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const context = canvas.getContext("2d");
const frameCount = 646;

const currentFrame = (index) => `./file/${(index + 1).toString()}.jpg`;
const images = [];
let ball = {frame : 0}

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
//console.log(images);

//
gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "600%",
       // markers: true,
    },
    onUpdate: render,
});

// task:fix fade in problem
gsap.fromTo(
    ".contact-text",
    { opacity: 0 },
    { 
        opacity: 1,
        scrollTrigger:{
            scrub: "true",
            start:"570%",
            end: "700%",
        },
        onComplete: () => {
            gsap.to(".contact-text", { opacity: 0 });
        },
    }
);

//make render function for webgl(Web Graphics Library) 
images[0].onload = render;

function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}

//navbar function

const burger = document.querySelector("#nav-icon2");

burger.addEventListener('click', (e) => {
    if(burger.classList.contains('active')){
        gsap.to(".links", {x: '100%'});
        gsap.to(".namecard h2, h3", {opacity: 1});

        gsap.set("body", {overflow : "auto"});
        gsap.set("body", {overflowX : "hidden"});
    
    }else{
        
        gsap.to(".links", {x: '0%'});
        gsap.to(".namecard h2, h3", {opacity: 0});

        gsap.fromTo(
            ".links a", 
            {opacity : 0,  y:0 },
            {opacity : 1, y:30, delay: 0.3, stagger:0.3}
            );
        gsap.set("body", {overflow : "hidden"});
    }
    burger.classList.toggle('open');
    burger.classList.toggle('active');
    //it will show up in console

});



