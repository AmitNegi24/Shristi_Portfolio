import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";

import promotionalBanner from "../assets/GC.jpeg";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import Ganesh from "../assets/GC_visual.jpeg";
import Ganesh2 from "../assets/Ganesh2.jpeg";

gsap.registerPlugin(ScrollTrigger);

function GaneshChaturthi({
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
                  Ganesh Chaturthi
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-light mt-6">
                  Visual Campaign
                </h2>

                <p className="mt-5 text-xs md:text-sm tracking-wide opacity-50">
                  Digital Guidebook
                  <span className="mx-2">•</span>
                  Festival Awareness
                  <span className="mx-2">•</span>
                  Promotional Design
                </p>
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
                A visual campaign for Sri Mandir, featuring a Ganesh
                Chaturthi guidebook and a promotional banner. The project
                brings festive content into a cohesive design, using
                devotional imagery, warm colours and clear typography to
                create an inviting reading experience.
              </p>
            </div>

            {/* FULL WIDTH HERO IMAGE */}

            <div className="mt-3 justify-center md:flex md:mx-2">
              <img
                src={Ganesh}
                alt="Ganesh Chaturthi Visual Campaign"
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
                  Celebrating tradition
                  <br />
                  through visual
                  <br />
                  storytelling.
                </h2>
              </div>

              {/* RIGHT */}

              <div className="lg:pt-14 space-y-6 text-sm md:text-base leading-8 opacity-65">
                <p>
                  I designed the guidebook with a focus on readability,
                  visual hierarchy and consistent page layouts. The
                  composition balances imagery and text, helping readers
                  navigate the content while maintaining a festive mood
                  throughout.
                </p>

                <p>
                  The project combines a detailed digital guidebook with a
                  promotional banner, covering important aspects of Ganesh
                  Chaturthi including rituals, puja essentials, traditions
                  and Visarjan.
                </p>
              </div>
            </div>

            {/* PROJECT INFORMATION */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10 md:mt-12 pt-6 border-t border-black/15 dark:border-white/15">
              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase opacity-40">
                  Role
                </span>

                <p className="mt-3 text-sm">
                  Graphic Designer
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase opacity-40">
                  Project Type
                </span>

                <p className="mt-3 text-sm">
                  Visual Design
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase opacity-40">
                  Deliverables
                </span>

                <p className="mt-3 text-sm">
                  Guidebook · Banner
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase opacity-40">
                  Tools
                </span>

                <p className="mt-3 text-sm">
                  Figma · Photoshop
                </p>
              </div>
            </div>
          </section>

          {/* ==================================================
              SECTION 02 — GUIDEBOOK VISUALS
          ================================================== */}

          <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 pb-20 md:pb-28 -mt-24 md:-mt-32">
            {/* IMAGE 1 — FULL WIDTH */}

            <div className="w-full overflow-hidden">
              <img
                src={img1}
                alt="Ganesh Chaturthi Guidebook Mockup"
                className="w-full h-auto block object-cover"
              />
            </div>

            {/* IMAGE 2 + IMAGE 3 — HALF / HALF */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              <div className="w-full overflow-hidden">
                <img
                  src={img2}
                  alt="Ganesh Chaturthi Guidebook Pages"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full overflow-hidden">
                <img
                  src={img3}
                  alt="Ganesh Chaturthi Guidebook Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ==================================================
              SECTION 03 — PROMOTIONAL BANNER
          ================================================== */}

          <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 py-20 md:py-32">
            {/* HEADING */}

            <div className="flex gap-6 md:gap-12 items-start mb-14">
              <span className="text-xs opacity-40">
                03
              </span>

              <div>
                <p className="text-[10px] md:text-xs tracking-[0.22em] uppercase opacity-50 mb-3">
                  Promotional Creative
                </p>

                <h2 className="text-4xl md:text-6xl tracking-[-0.04em]">
                  Festival Awareness Banner
                </h2>
              </div>
            </div>

            {/* CONTENT */}

            <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-12 lg:gap-24 items-center">
              {/* TEXT */}

              <div>
                <p className="text-base leading-8 opacity-65">
                  Alongside the guidebook, I designed a promotional banner
                  to introduce the guide and encourage users to explore the
                  complete Ganesh Chaturthi resource.
                </p>

                <p className="text-base leading-8 opacity-65 mt-5">
                  The banner follows the same festive visual language as the
                  guidebook, creating consistency across the campaign while
                  highlighting the most important information.
                </p>
              </div>

              {/* IMAGE */}

              <div className="bg-[#e6ded2] dark:bg-stone-900 p-4 md:p-10">
                <img
                  src={promotionalBanner}
                  alt="Ganesh Chaturthi Promotional Banner"
                  className="w-full h-auto block shadow-2xl"
                />
              </div>
            </div>
          </section>

          {/* ==================================================
              SECTION 04 — DESIGN APPROACH
          ================================================== */}

          <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
              {/* LEFT */}

              <div>
                <span className="text-xs opacity-40">
                  04
                </span>

                <p className="text-[10px] tracking-[0.22em] uppercase mt-8 mb-5 opacity-50">
                  Design Approach
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.04em]">
                  Traditional emotion.
                  <br />
                  Modern editorial
                  <br />
                  structure.
                </h2>
              </div>

              {/* RIGHT */}

              <div className="lg:pt-24">
                <p className="text-base md:text-lg leading-8 opacity-65 max-w-xl">
                  I used a warm, devotional and festive visual direction,
                  combining traditional Indian elements with a clean
                  editorial layout.
                </p>

                <p className="text-base md:text-lg leading-8 opacity-65 max-w-xl mt-6">
                  The visual hierarchy was designed to make dense festival
                  information feel approachable while preserving the
                  cultural character of Ganesh Chaturthi.
                </p>
              </div>
            </div>

            {/* LARGE OUTCOME IMAGE */}

            <div className="mt-20 md:mt-28">
              <img
                src={Ganesh2}
                alt="Ganesh Chaturthi campaign visual"
                className="w-full h-auto block"
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
              Ganesh Chaturthi guide.
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

export default GaneshChaturthi;