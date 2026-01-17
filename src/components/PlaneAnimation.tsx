import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import planeImg from "../assets/pink-plane.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PlaneAnimation = () => {
  const planeRef = useRef<HTMLImageElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!planeRef.current || !trailRef.current || !pathRef.current) return;

    // Plane starts off-screen and invisible
    gsap.set(planeRef.current, { autoAlpha: 0, x: -200 });

    // Plane motion along path
    // const planeTween = gsap.to(planeRef.current, {
    //   scrollTrigger: {
    //     trigger: pathRef.current,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1.5,
    //   },
    //   autoAlpha: 1,
    //   x: 0,
    //   motionPath: {
    //     path: pathRef.current,
    //     align: pathRef.current,
    //     alignOrigin: [0.5, 0.5],
    //     autoRotate: true,
    //   },
    //   ease: "power1.inOut",
    // });

    // Trail effect: fade out streaks behind the plane
    gsap.to(trailRef.current, {
      scrollTrigger: {
        trigger: pathRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
      x: () => planeRef.current!.getBoundingClientRect().left,
      y: () => planeRef.current!.getBoundingClientRect().top,
      opacity: 0,
      repeat: -1,
      duration: 0.6,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="absolute top-20 left-0 z-50 pointer-events-none w-full h-full">
      {/* Hidden path for motion */}
      <svg width="0" height="0">
        <path
          ref={pathRef}
          d="
            M 400 100
            C 750 200, 800 500, 700 800
            C 500 1100, 350 1250, 500 1500
            C 650 1700, 750 1600, 600 1800
            c 1700 750, 850 400, 299,1777
          "
          fill="none"
        />
      </svg>

      {/* Trail div attached to plane */}
      <div
        ref={trailRef}
        className="absolute w-16 h-2 bg-gradient-to-r from-[#FFE9FE] to-[#FF96F9] rounded-full opacity-50 pointer-events-none"
      />

      {/* Plane */}
      <img
        ref={planeRef}
        src={planeImg}
        alt="Paper Plane"
        className="w-[10cm] h-auto"
      />
    </div>
  );
};

export default PlaneAnimation;
