

//add cursor function

// Front-page fade in Effect

gsap.fromTo(
    ".namecard h2", 
        { opacity: 0 }, 
            { opacity: 1, 
                duration: 5, 
                delay: 3.5,
            });

gsap.fromTo(
    ".namecard h3",
        { opacity: 0}, 
            { opacity: 1, 
                duration: 5, 
                delay: 3.7, 
            });

gsap.fromTo(
    ".arrow",
        { opacity: 0,
            rotation: 90,
            y: '200px',
        }, 
            { opacity: 0.5, 
                ease:
                Bounce.easeOut,
                y:'300px',
                duration: 5, 
                delay: 3.8, 
                repeat: -1,
                yoyo: true ,
 });


     // make second scroll animation looks better 
     //task: still looks weird, make it better    

gsap.fromTo(
    " .mask",
    { opacity: 0,
        x: '0%',
    },
        { 
        opacity: 1,
            x: '-80%',
        scrollTrigger:{
            scrub: "true",
            start:"0%",
            end: "30%",
            //markers: true,
            },
        onComplete: () => {
            gsap.to(".mask", 
            { opacity: 0 });
        },
           
    }
);
gsap.fromTo(
    ".mask2",
    { opacity: 0,
        x: '-110%',
    },
        { 
        opacity: 0.8,
            x: '-100%',
        scrollTrigger:{
            effects: true,
            scrub: "true",
            start:"0%",
            end: "40%",
            //markers: true,
            },
        onComplete: () => {
            gsap.to(".mask2", 
            { opacity: 0 });
        },
           
    }
);

gsap.fromTo(
    ".mask3",
    { opacity: 0,
        x: '-100%',
    },
        { 
        opacity: 0.8,
            x: '-100%',
        scrollTrigger:{
            scrub: "true",
            start:"0%",
            end: "40%",
            //markers: true,
            },
        onComplete: () => {
            gsap.to(".mask3", 
            { opacity: 0 });
        },
           
    }
);


gsap.fromTo(
    ".ghostegg",
    { opacity: 0 ,
        y: '-20%',
    },
    { 
        opacity: 1,
            y: '110%',
        scrollTrigger:{
            scrub: "true",
            start:"0%",
            end: "30%",
            //markers: true,
        },
        onComplete: () => {
            gsap.to(".ghostegg", 
            { opacity: 0 });
        },
       
    }
);


//second-page animation

gsap.fromTo(
    ".button-wrapper",
    { opacity: 0,
        x: '0%',
        //y: '40%',
    },
        { 
        opacity: 1,
            x: '-100%',
            //y: '50%',
        scrollTrigger:{
            scrub: "true",
            start:"30%",
            end: "75%",
            //markers: true,
            },
        onComplete: () => {
            gsap.to(".button-wrapper", 
            { opacity: 0});
        },
           
    }
);


const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const context = canvas.getContext("2d");
const frameCount = 646;

const currentFrame = (index) => `./file/${(index + 1).toString()}.jpg`;
const images = [];
let egg = {frame : 0}

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
//console.log(images);

//
gsap.to(egg, {
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
            start:"65%",
            end: "70%",
            //markers: true,
        },
        onComplete: () => {
            gsap.to(".contact-text", { opacity: 0 });
        },
    }
);

gsap.fromTo(
    ".water",
    { opacity: 1 ,
        y: '-70%',
    },
    { 
        opacity: 1,
            y: '200%',
        scrollTrigger:{
            scrub: "true",
            start:"70%",
            end: "100%",
            markers: true,
        },
        onComplete: () => {
            gsap.to(".water", 
            { opacity: 1 });
        },
       
    }
);
//make render function for webgl(Web Graphics Library) 
images[0].onload = render;

function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[egg.frame], 0, 0);
}

//navbar function

const burger = document.querySelector("#nav-icon2");

burger.addEventListener('click', (e) => {
    if(burger.classList.contains('active')){
        gsap.to(".links", {x: '100%'});
        gsap.to(".namecard h2, h3", {opacity: 1});
        gsap.to(".arrow", {opacity: 1});

        gsap.set("body", {overflowX : "hidden"});
    
    }else{
        
        gsap.to(".links", {x: '0%'});
        gsap.to(".namecard h2, h3", {opacity: 0});
        gsap.to(".arrow", {opacity: 0});



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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 wrapper: "#wrapper, .wrapper",
 content: "#content, img",
 smooth: 2,
 effects: true,
});

let headings = gsap.utils.toArray(".bottom").reverse();
headings.forEach((heading, i) => {
 let headingIndex = i + 1;
 let mySplitText = new SplitText(heading, { type: "chars" });
 let chars = mySplitText.chars;

 chars.forEach((char, i) => {
  smoother.effects(char, { lag: (i + headingIndex) * 0.33, speed: 0.5 });
 });
});


