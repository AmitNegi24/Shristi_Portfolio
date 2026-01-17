
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import spendly from "../assets/spendly1.jpeg"
import spendlypng from "../assets/spendly2.png"
import Aurat from "../assets/Aurat.png";
import spendly3 from "../assets/spendly3.png"
import mockup1 from "../assets/mockup1.png"
import wireframe from "../assets/Wireframe.jpeg"
import colorpalette from "../assets/colorpallete.jpeg"
import "./Project1.css";

gsap.registerPlugin(ScrollTrigger);

function Project2({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {

  return (
    <>
      <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="project-page my-10">
          <h1>Project Spendly</h1>
          <div className="md:mx-40 my-10">
            <img src={spendly} alt="Project Spendly"></img>
          </div>
          <section className="">
            <div className="mx-5">
              <div className="flex justify-center">
                <h2 className="font-bold">OVERVIEW</h2>
              </div>

              <p>
                Spendly is a personal finance management app that helps users track expenses, manage subscriptions, and achieve financial goals through real-time insights and visual analytics.
                The app focuses on clarity, control, and consistency in money management.
              </p>
              <br></br>
              <h2 className="font-bold">PROBLEM STATEMENT</h2>
              <p>
                Young adults and early professionals struggle with managing finances because:
              </p>
              <br></br>
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                Why managing money feels hard
              </h3>
              <div className="flex flex-row w-full">
                <div className=" w-1/2 flex items-center justify-center">
                  <img
                    src={spendly3}
                    alt="Spendly illustration"
                    className="w-[100%] h-[80%] object-fill md:object-contain md:h-full md:w-full"
                  />
                </div>
                <div className="w-1/2 p-4 md:p-12 flex flex-col justify-center">


                  <ol className="list-decimal ml-5 space-y-2 text-sm md:text-3xl">
                    <li>They don’t clearly understand where their money goes</li>
                    <li>Subscriptions silently drain money every month</li>
                    <li>Existing finance apps feel complex or overwhelming</li>
                    <li>Financial data is shown, but not explained</li>
                  </ol>
                </div>
              </div>
              <div>
                <h2 className="font-bold">Result:</h2>
                <p>Users react after overspending instead of preventing it. This is the real problem. Not “people want to save money.” That’s lazy.</p>
                <br></br>
                <h2 className="text-xl font-semibold mb-4">SOLUTION</h2>
                <p className=" mb-8">
                  Spendly simplifies money management by:
                </p>
                <div className="flex flex-row-reverse w-full">

                  {/* Image */}
                  <div className="w-[70%] md:w-1/2 h-auto md:h-96 flex justify-end">
                    <img
                      src={mockup1}
                      alt="Mockup"
                      className="w-full h-auto object-contain md:w-[88%] md:h-[138%] md:object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-[30%] md:w-1/2 p-4 md:p-12 flex flex-col justify-center">
                    <ol className="list-decimal ml-4 space-y-1 text-sm md:text-2xl">
                      <li>Automatically categorizing expenses</li>
                      <li>Tracking subscriptions</li>
                      <li>Visualizing spending patterns</li>
                      <li>Savings goals</li>
                    </ol>
                  </div>

                </div>


                <div className="">
                  <h2 className="font-bold">DESIGN APPROACH</h2>
                  <ol className="list-decimal mx-10">
                    <li>Dark UI to reduce eye strain and enhance data contrast</li>
                    <li>Minimal layouts to avoid information overload</li>
                    <li>Bold accent colors to highlight key actions and insights</li>
                  </ol>
                  <br></br>
                  <div className="flex justify-center">
                    <img src={wireframe} className="md:w-[55%] h-[50%] object-cover mx-42 md:mx-100" />
                  </div>
                  <br></br>
                  <div className="flex justify-center">
                    <img src={colorpalette} className="w-full h-full object-cover md:w-[55%] md:mx-105" />
                  </div>
                  <div>
                    <br></br>
                    <h2 className="font-bold">OUTCOME</h2>
                    <p>The final design delivers a modern, intuitive finance app experience that helps users understand their spending behavior and take control of their finances with confidence.</p>
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

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Project2;
