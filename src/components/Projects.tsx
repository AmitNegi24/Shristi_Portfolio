import pic1 from "../assets/pic1.jpeg";
import pic3 from "../assets/pic3.jpeg";
import BrewNBake from "../assets/BrewnBake.jpeg";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <h1 className="text-3xl py-6 text-center md:mb-3">Explore my projects</h1>

            {/* WRAPPER CONTROLS SPACING */}
            <div className="max-w-6xl mx-auto space-y-12 md:mt-10">
                <p>A collection of my latest UI design case studies —— blending research , creativity and usability to deliver real - wrorld impact</p>
                {/* PROJECT 1 */}
                <div className="slide-card rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 w-full h-64 md:h-96">
                            <img src={pic1} className="w-full h-full object-cover" />
                        </div>

                        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-semibold mb-4">
                                EDGE STUDIO
                            </h3>
                            <p className="text-gray-600 text-lg mb-8">
                                Edge Studio is a Gen-Z clothing brand creating bold, Clean designs, strong attitude, zero hype chasing.
                            </p>
                            <Link
                                to="/EdgeStudio"
                                className="inline-flex items-center justify-center
                                            bg-gradient-to-r from-cyan-500 to-blue-500
                                          text-white px-8 py-3 rounded-xl font-semibold
                                            transition-transform duration-300 hover:scale-105">
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PROJECT 2 (IMAGE RIGHT) */}
                <div className=" slide-card rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-1/2 w-full h-64 md:h-96">
                            <img src={pic3} className="w-full h-full object-cover" />
                        </div>

                        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-semibold mb-4">
                                SPENDLY
                            </h3>
                            <p className="text-lg mb-8">
                                UI/UX design of a finance management app, including research, wireframing, and high-fidelity screens in Figma.
                            </p>
                            <Link
                                to="/project2"
                                className="inline-flex items-center justify-center
                                            bg-gradient-to-r from-cyan-500 to-blue-500
                                          text-white px-8 py-3 rounded-xl font-semibold
                                            transition-transform duration-300 hover:scale-105">
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PROJECT 3 */}
                <div className=" slide-card rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 w-full h-64 md:h-96">
                            <img src={BrewNBake} className="w-full h-full object-cover" />
                        </div>

                        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-semibold mb-4 ">
                                BREW & BAKE
                            </h3>
                            <p className="text-lg mb-8">
                                A cafe ordering app concept focused on menu discovery and smooth ordering flows.
                            </p>
                            <Link
                                to="/BrewNBake"
                                className="inline-flex items-center justify-center
                                            bg-gradient-to-r from-cyan-500 to-blue-500
                                          text-white px-8 py-3 rounded-xl font-semibold
                                            transition-transform duration-300 hover:scale-105">
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
