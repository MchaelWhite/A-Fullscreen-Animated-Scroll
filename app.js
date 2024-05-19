let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.front-page',
        start: "0%",
        end: "100%",
        markers: true,
        scrub: true,
        pin: true,
    },
});

tl.fromTo(".front-page", 
{ clipPath: "circle(5%)"}, 
{clipPath: "circle(75%)"}  /* note: tomake the animation longer, add a duration */
);

tl.fromTo(".music-note", { scale: 0.5 }, { scale: 0, opacity: 0 });

tl.fromTo(".title", {opacity: 0}, {opacity:1});
tl.fromTo(".sub-title", {opacity: 0}, {opacity: 1});