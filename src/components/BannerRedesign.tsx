import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
import GaneshChalisa from "../assets/GaneshChalisa.jpeg";
import Devotion from "../assets/Devotion.jpeg";
import HanumanChalisa from "../assets/HanumanChalisa.jpeg";

gsap.registerPlugin(ScrollTrigger);

function BannerRedesign({
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
                className={`app-wrapper min-h-screen ${darkMode
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
                                    Hanuman Chalisa
                                    <br />
                                    Banner Redesign
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
                                Redesigned Sri Mandir’s Tuesday Special banner by replacing the deep orange background with a light, temple-inspired setting. Used bold black typography to distinguish the headline from the detailed devotional imagery, while retaining the prominent green “Click to Read” button. The composition brings Hanuman Ji into a richer architectural environment while keeping the message and reading action clearly visible.
                            </p>
                        </div>

                        {/* FULL WIDTH HERO IMAGE */}

                        <div className="mt-3 justify-center md:flex md:mx-2">
                            <img
                                src={HanumanChalisa}
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
                                    Ganesh Chalisa
                                    <br />
                                    Banner Redesign
                                </h2>
                            </div>

                            {/* RIGHT */}

                            <div className="lg:pt-14 space-y-6 text-sm md:text-base leading-8 opacity-65">
                                <p>
                                    Redesigned Sri Mandir’s Wednesday Special banner with a bright devotional setting, floral details, and a softer background palette. Paired a bold headline with a green day label and reading button to establish a consistent visual hierarchy. The layout balances Lord Ganesha’s imagery with the text, creating a cohesive composition that connects the featured content with its call to action.                                </p>
                            </div>
                        </div>

                        {/* PROJECT INFORMATION */}

                    </section>

                    {/* ==================================================
              SECTION 02 — GUIDEBOOK VISUALS
          ================================================== */}

                    <section className="reveal-section px-6 md:px-12 lg:px-20 xl:px-28 pb-0 md:pb-20 -mt-100 md:-mt-100">
                        <div className="w-full h-[300px] md:h-auto block object-cover">
                            <img
                                src={GaneshChalisa}
                                alt="Ganesh Chaturthi Guidebook Mockup"
                                className="w-full h-auto block object-cover"
                            />
                        </div>
                    </section>

                    {/* ==================================================
              SECTION 03
          ================================================== */}
                    <section className="reveal-section p-8 md:p-0 md:mx-40 mt-0 mb-10 md:my-10 relative z-20">
                        {/* HERO HEADING */}

                        <div className="px-6 md:px-12 lg:px-20 xl:px-28">
                            <div className="max-w-6xl mx-auto text-center pt-8 md:pt-12 pb-10 md:pb-14">
                                <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.05]">
                                    Sri Mandir - Devotional Guide Redesign
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
                                Redesigned Sri Mandir’s “What to Do & What to Avoid” themed creatives to present daily devotional guidance through a cohesive visual style. Combined prominent deity imagery with structured sections for the day’s significance, daily mantra, and recommended practices. Refined typography, spacing, colors, and supporting icons to make the information easier to browse while maintaining a devotional tone.
                            </p>
                        </div>

                        {/* FULL WIDTH HERO IMAGE */}

                        <div className="mt-3 justify-center md:flex md:mx-2">
                            <img
                                src={Devotion}
                                alt="Navratri Fasting Guide"
                                className="w-full h-auto block object-contain"
                            />
                        </div>
                    </section>


                    {/* ==================================================

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

export default BannerRedesign;