function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()
function videoCursor() {



    const playCursor = document.querySelector("#playcrsr")
    const video_container = document.querySelector("#video-container")
    video_container.addEventListener("mouseenter", function (dets) {
        gsap.to(playCursor, {
            scale: 1,
            opacity: 1
        })
    })
    video_container.addEventListener("mouseleave", function (dets) {
        gsap.to(playCursor, {
            scale: 0,
            opacity: 0
        })
    })
    video_container.addEventListener("mousemove", function (dets) {
        gsap.to(playCursor, {
            left: dets.clientX - 70,
            top: dets.clientY - 80,
        })
    })

}
videoCursor()

function loadingHeading() {

    gsap.from("#section1 h1", {
        y: 200,
        opacity: 0,
        stagger: 0.2
    })
    gsap.from("#section1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1,
        duration: 0.4
    })
} loadingHeading()


function productHoverMouse() {

    const globalCursor = document.querySelector("#cursor")
    document.addEventListener("mousemove", function (dets) {

        gsap.to(cursor, {
            left: dets.x,
            top: dets.y
        })
    })
    const childs = document.querySelectorAll(".child")
    childs.forEach(function (child) {

        child.addEventListener("mouseenter", function (dets) {
            gsap.to(cursor, {
                transform: `translate(-50% , -50%) scale(1)`,
            })
        })
        child.addEventListener("mouseleave", function (dets) {
            gsap.to(cursor, {
                transform: `translate(-50% , -50%) scale(0)`,
            })
        })


    })
}
productHoverMouse()

function NavAnimation() {

    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#nav-part1 svg",
            scroller: "#main",
            //    markers: true,
            start: "top 0",
            end: "top -20%",
            scrub: true,
        }
    })
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#nav-part1 svg",
            scroller: "#main",
            //    markers: true,
            start: "top 0",
            end: "top -10%",
            scrub: 0.5,
        }
    })


}
NavAnimation()

function ProductImagesAnimation() {
    gsap.to("#child-1, #child-2, #child-3, #child-4", {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
            trigger: "#child-1, #child-2, #child-3",
            scroller: "#main",
            // markers:true,
            start: "top 70%",
            end: "top 30%",
            scrub: 2
        },
        stagger: 0.4,
        duration: 1,
    })

}
ProductImagesAnimation()
function AboutPage() {
    gsap.from("#section4 h1", {
        opacity: 0,
        scale: 0.5,
        scrollTrigger: {
            trigger: "#section4 h1",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            scrub: 3
        },
        duration: 2
    })
    gsap.from("#section4 #msgBtn, #section4 h4", {
        opacity: 0,
        scale: 0.5,
        scrollTrigger: {
            trigger: "#section4 #msgBtn, #section4 h4",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 50%%",
            scrub: 3
        },
    })

    gsap.from("#section5>#elems2>img, #section5>#elems3>img", {
        scale: 1.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#section5>#elems2>img, #section5>#elems3>img",
            scroller: "#main",
            // markers:true,
            start: "top 50%",
            end: "top 20%",
            scrub: 3,
        }
    })
}
AboutPage()

function footer1() {
    gsap.from("#section6>#emailInput" , {
        opacity: 0,
       scrollTrigger: {
            trigger: "#section6>#emailInput",
            scroller: "#main",
            scrub: 4,
            // markers: true,
            start: "top 50%",
            end: "top 10%",
            ease: Power4.easeOut
            
        },
        stagger: 2
    })
    gsap.from("#section6>#section6-mid>.section6-mid-inner",{
        opacity:0,
        duration:1.5,
        scrollTrigger: {
            trigger: "#section6>#section6-mid>.section6-mid-inner",
            scroller: "#main",
            scrub: 3,
            // markers: true,
            start: "top 60%",
            end: "top 40%",
            ease: Power3.easeOut
            
        },
        stagger: 2
        
    })
    gsap.from("#section6>#section6-mid2>.section6-mid-inner",{
        opacity:0,
        duration:1.5,
        scrollTrigger: {
            trigger: "#section6>##section6-mid2>.section6-mid-inner",
            scroller: "#main",
            scrub: 4,
            // markers: true,
            start: "top 60%",
            end: "top 30%",
            ease: Power3.easeOut
            
        },
        stagger: 2
        
    })


}

footer1()
