import Navbar from "./Navbar";
import coffeeShop from "../assets/CoffeeShop.jpeg";
import coffeeOverview from "../assets/CoffeeOverView.png";
import coffeetoffee from "../assets/CoffeeToffee.png";
import chandan from "../assets/Chandan.png";
import Bhaag from "../assets/bhaag.png";
import Logo from "../assets/Logo.jpeg";
import colorpalette2 from "../assets/colorpallete2.jpeg"
import Aurat from "../assets/Aurat.png";
import { useEffect, useRef } from "react";
import planeImg from "../assets/pink-plane.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function BrewNBake({
    darkMode,
    toggleDarkMode,
}: {
    darkMode: boolean;
    toggleDarkMode: () => void;
}) {
    const planeRef = useRef<HTMLImageElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const trailRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        if (!planeRef.current || !pathRef.current || !trailRef.current) return;

        // Plane motion along path
        gsap.to(planeRef.current, {
            scrollTrigger: {
                trigger: pathRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.6, // smooth floaty motion
            },
            motionPath: {
                path: pathRef.current,
                align: pathRef.current,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            ease: "power2.out",
        });

        // Trail animation
        const pathLength = trailRef.current.getTotalLength();
        trailRef.current.style.strokeDasharray = `${pathLength}`;
        trailRef.current.style.strokeDashoffset = `${pathLength}`;

        gsap.to(trailRef.current, {
            scrollTrigger: {
                trigger: pathRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.6,
            },
            strokeDashoffset: 0,
            ease: "none",
        });
    }, []);

    return (
        <>
            <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                {/* Plane Animation */}
                <div className="absolute top-24 left-4 z-50 pointer-events-none">
                    {/* Hidden path */}
                    <svg width="0" height="0">
                        <path
                            ref={pathRef}
                            d="M50,100 C150,200 150,400 50,700"
                            fill="none"
                        />
                    </svg>

                    {/* Trail */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <path
                            ref={trailRef}
                            d="M50,100 C150,200 150,300 50,700"
                            fill="none"
                            stroke="url(#trailGradient)"
                            strokeWidth={6}
                            strokeLinecap="round"
                            strokeOpacity={0.6}
                        />
                        <defs>
                            <linearGradient id="trailGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFE9FE" />
                                <stop offset="100%" stopColor="#FF96F9" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Plane */}
                    <img
                        ref={planeRef}
                        src={planeImg}
                        alt="Paper Plane"
                        className="w-[2.3cm] h-auto mix-blend-multiply opacity-50"
                    />
                </div>
                <div className="p-8 md:p-0 md:mx-40 my-10">
                    <h1 className="text-4xl font-bold mb-4">Brew & Bake</h1>
                    <div className="flex  justify-center mt-3 md:mt-10 mx-10">
                        <h2 className="text-center">WHere coffee feels home</h2>
                    </div>
                    <div className="mt-3 justify-center md:flex md:mx-2" >
                        <img src={coffeeShop} alt="coffeeNotFound" />
                    </div>
                    <div className="mt-3 flex justify-center font-bold">
                        <h2>OVERVIEW</h2>
                    </div>
                    <div className="flex justify-center">
                        <img src={coffeeOverview} alt="coffeeNotFound" />
                    </div>
                    <div className="flex justify-center">
                        <p>Brew & Bake is a cafe and bakery app concept designed to simplify online ordering while preserving a warm, cozy brand experience.</p>
                    </div>

                    <div className="flex justify-center mt-5 font-bold">
                        <h2>PROBLEM</h2>
                    </div>
                    <div className="flex flex-col md:flex-row mt-3">
                        <div className="md:w-1/2 w-full h-auto md:h-auto">
                            <img src={coffeetoffee} className="w-full h-full object-cover" />
                        </div>

                        <div className="md:w-1/2 w-full flex flex-col justify-center">
                            <p className="">
                                Most café apps feel cluttered and transactional, making ordering slow and frustrating for users.
                            </p>
                            <p>
                                Several café apps prioritize promotions and upsells over usability, resulting in interfaces that feel sales-driven rather than user-centric. This disrupts the calm, cozy experience users expect from a café.
                            </p>

                            <p>
                                Navigation is frequently inconsistent, forcing users to move across multiple screens just to complete a simple order. The lack of a clear, intuitive flow from browsing to checkout leads to frustration and abandoned orders.
                            </p>

                            <p>
                                Dense typography, tight spacing, and poor contrast make menus difficult to scan. Users struggle to quickly compare items and prices, turning what should be an enjoyable process into a mentally taxing task.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3">
                        <h2 className="font-bold">SOLUTION</h2>
                    </div>
                    <div className="flex flex-col md:flex-row mt-3">
                        <div className="md:w-[30%] w-full h-auto md:h-auto justify-center">
                            <img src={chandan} className="w-full max-w-xs h-100 md:mx-10 object-contain" />
                        </div>

                        <div className="md:w-[70%] w-full flex flex-col justify-center">
                            <p className="">
                                The solution focused on creating a simple and efficient ordering flow that guides users from menu browsing to checkout with minimal steps. A warm color palette, rounded UI elements, and clear visual hierarchy were used to reflect the cozy café brand while keeping the interface easy to navigate. Large product imagery and readable typography help users make quick decisions without feeling overwhelmed.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3 md:mt-15">
                        <h2 className="font-bold">OUTCOME</h2>
                    </div>
                    <div className="flex justify-center mt-3 md:mt-5">
                        <p>A smooth, brand-focused café ordering experience that balances usability and aesthetics.</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={Bhaag}></img>
                    </div>
                    <div className="flex justify-center mt-3 md:mt-10 font-bold">
                        <h2>High Fidelity - Wireframes</h2>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        {[1, 2].map(i => (
                            <div key={i} className="basis-1/3 flex-1">
                                <img
                                    src={`./src/assets/image${i}.jpeg`}
                                    className="slide-card rounded-lg object-cover w-full h-full"
                                    alt={`image-${i}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-3 md:mt-10 font-bold">
                        <h2>LOGO</h2>
                    </div>
                    <div className="flex justify-center">
                        <img src={Logo} alt="logo" className=" h-60 w-60"></img>
                    </div>
                    <div className="flex justify-center mt-3 md:mt-10 font-bold">
                        <h2>COLOR PALETTE</h2>
                    </div>
                    <div className="flex justify-center">
                        <img src={colorpalette2} alt="colorpalette" className="ml-5 h-16 w-96"></img>
                    </div>
                    <div className="flex justify-center ">
                        <img src={Aurat} className="w-60 h-60" />
                    </div>
                    <div className="flex justify-center mt-1 mb-10">
                        <h2 className="festive-regular2 text-4xl">Thank you for your time</h2>
                    </div>
                    <div className="flex justify-center mb-10 mx-5">
                        <p className="flex flex-col">Feel free to provide your valuable suggestion and comments</p>
                    </div>
                </div>
            </div>
        </>

    );
}
export default BrewNBake;