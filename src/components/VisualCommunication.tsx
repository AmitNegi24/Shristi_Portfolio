import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
import Karna from "../assets/Karna.jpeg";
import Durga from "../assets/Durga.jpeg";
import NavratriGuide from "../assets/NavratriGuide.jpeg";
import Pitru from "../assets/Pitru.jpeg";

gsap.registerPlugin(ScrollTrigger);

function VisualCommunication({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  /* =========================================================
     LENIS SMOOTH SCROLL
  ========================================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections =
        gsap.utils.toArray<HTMLElement>(".reveal-section");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        className={`app-wrapper min-h-screen ${
          darkMode
            ? "dark bg-stone-950 text-stone-100"
            : "bg-[#f4f1eb] text-[#171717]"
        }`}
      >
        {/* ==================================================
            NAVBAR
        ================================================== */}

        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main>
          {/* ==================================================
              HERO
          ================================================== */}

          <section className="p-8 md:p-0 md:mx-40 my-10 relative z-20">
            {/* HERO HEADING */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-28">
              <div className="max-w-6xl mx-auto text-center pt-8 md:pt-12 pb-10 md:pb-14">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.05]">
                   Navratri Fasting Guide
                </h1>
              </div>
            </div>

            {/* PROJECT INTRO */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-1 mt-16 md:mt-24 mb-10 md:mb-14">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] leading-[1.05]">
                  About the Campaign
                </h2>
              </div>

              <p className="mt-6 w-full text-sm md:text-base lg:text-lg leading-7 md:leading-8 opacity-65">
                Created a visual guide for Sri Mandir to present Navratri fasting traditions in a clear and accessible format. Combined devotional imagery, a burgundy and gold palette, and organized food categories to distinguish what to eat and what to avoid. The layout uses prominent headings and supporting visuals to help readers navigate the information while maintaining the festival’s devotional character.
              </p>
            </div>

            {/* FULL WIDTH HERO IMAGE */}

            <div className="mt-3 justify-center md:flex md:mx-2">
              <img
                src={NavratriGuide}
                alt="Navratri Fasting Guide"
                className="w-full h-auto block object-contain"
              />
            </div>
          </section>

          {/* ==================================================
              SECTION 01 — PROJECT OVERVIEW
          ================================================== */}

          <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 pt-8 md:pt-12 pb-0">
            <span className="text-xs opacity-40">
              01
            </span>

            <div className="grid lg:grid-cols-[1fr_0.75fr] gap-12 lg:gap-28 mt-8">
              {/* LEFT */}

              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.03] font-medium">
                  Karna's Connection to Pitru Paksha
                  <br />
                  through visual
                  <br />
                  storytelling.
                </h2>
              </div>

              {/* RIGHT */}

              <div className="lg:pt-14 space-y-6 text-sm md:text-base leading-8 opacity-65">
                <p>
                  Created visual storytelling content for Sri Mandir exploring Karna’s story and its connection to Pitru Paksha. Paired expressive devotional imagery with carefully arranged text to guide readers through the narrative, its message, and related traditions. Warm colors, consistent typography, and distinct sections connect the storytelling with practical information about honoring ancestors.
                </p>
              </div>
            </div>

            {/* PROJECT INFORMATION */}

          </section>

          {/* ==================================================
              SECTION 02 — GUIDEBOOK VISUALS
          ================================================== */}

          <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 pb-0 md:pb-20 -mt-100 md:-mt-100">
            <div className="w-full h-75md:h-auto block object-cover">
              <img
                src={Karna}
                alt="Ganesh Chaturthi Guidebook Mockup"
                className="w-full h-auto block object-cover"
              />
            </div>
          </section>

          {/* ==================================================
              SECTION 03
          ================================================== */}
            <section className="reveal-section px-8 md:p-0 md:mx-40 -mt-100 mb-10 md:my-10 relative z-20">
            {/* HERO HEADING */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-28">
              <div className="max-w-6xl mx-auto text-center pt-0 md:pt-12 pb-10 md:pb-14">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.05]">
                    Durga — Visual Storytelling
                </h1>
              </div>
            </div>

            {/* PROJECT INTRO */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-1 mt-16 md:mt-24 mb-10 md:mb-14">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] leading-[1.05]">
                  About the Campaign
                </h2>
              </div>

              <p className="mt-6 w-full text-sm md:text-base lg:text-lg leading-7 md:leading-8 opacity-65">
                Designed devotional storytelling content for Sri Mandir depicting Goddess Durga’s battle with Mahishasura. Organized the narrative into numbered panels, combining vivid imagery with concise explanations to establish a clear reading sequence. A cohesive festive palette, decorative details, and consistent text hierarchy support the story’s progression and its themes of courage, strength, and the victory of dharma.
              </p>
            </div>

            {/* FULL WIDTH HERO IMAGE */}

            <div className="mt-3 justify-center md:flex md:mx-2">
              <img
                src={Durga}
                alt="Navratri Fasting Guide"
                className="w-full h-auto block object-contain"
              />
            </div>
          </section>
          

          {/* ==================================================
              SECTION 04 — DESIGN APPROACH
          ================================================== */}

           <section className="reveal-section p-8 md:p-0 md:mx-40 mt-0 mb-10 md:my-10 relative z-20">
            {/* HERO HEADING */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-28">
              <div className="max-w-6xl mx-auto text-center pt-8 md:pt-12 pb-10 md:pb-14">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.05]">
                     Pitru Rituals — Pilgrimage Guide
                </h1>
              </div>
            </div>

            {/* PROJECT INTRO */}

            <div className="px-6 md:px-12 lg:px-20 xl:px-1 mt-16 md:mt-24 mb-10 md:mb-14">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] leading-[1.05]">
                  About the Campaign
                </h2>
              </div>

              <p className="mt-6 w-full text-sm md:text-base lg:text-lg leading-7 md:leading-8 opacity-65">
                Created an educational visual guide for Sri Mandir highlighting sacred pilgrimage sites associated with Pitru rituals. Organized each location into consistent sections covering its significance, main rituals, and traditional observance periods. Combined location imagery, a warm cream and gold palette, and clear typography to make the cultural information easy to browse across the guide.
              </p>
            </div>

            {/* FULL WIDTH HERO IMAGE */}

            <div className="mt-3 justify-center md:flex md:mx-2">
              <img
                src={Pitru}
                alt="Navratri Fasting Guide"
                className="w-full h-auto block object-contain"
              />
            </div>
          </section>

          {/* ==================================================
              FINAL CTA
          ================================================== */}

          <section className="mt-16 bg-[#171717] dark:bg-black text-[#f5f2ec] px-6 md:px-12 lg:px-20 xl:px-28 py-28 md:py-40 text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">
              Complete Project
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95] mt-6">
              Explore the complete
              <br />
              Projects
            </h2>

            <p className="max-w-xl mx-auto text-sm md:text-base leading-7 opacity-50 mt-8">
              View the complete digital guidebook and explore the detailed
              festival information, visual system and editorial layouts.
            </p>

            <a
              href="https://drive.google.com/drive/folders/1-3V75PjPo_Aa5hZWbkyz3K4NxesoFY6O"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-cyan-500 to-blue-500 group mt-10 inline-flex items-center gap-12 bg-[#f5f2ec] text-[#171717] px-7 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span>Explore Guidebook</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </section>
        </main>
      </div>
    </>
  );
}

export default VisualCommunication;