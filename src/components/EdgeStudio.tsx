import Navbar from "./Navbar";
import pic1 from "../assets/pic1.jpeg";
import EdgeStudio from "../assets/EdgeStudio.jpeg";
import WireFrame from "../assets/WireFrame3.jpeg";
import Logo from "../assets/Logo1.jpeg";
import colorpalette from "../assets/Colorpallete3.jpeg";
import Aurat from "../assets/Aurat.png";

function BrewNBake({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* ✈️ LEFT SIDE PLANE (STATIC FOR NOW) */}
      {/* <PlaneAnimation /> */}

      {/* CONTENT */}
      <div className="p-8 md:p-0 md:mx-40 my-10 relative z-20">
        <h1 className="text-4xl font-bold mb-4">Edge Studio</h1>

        <div className="flex justify-center mt-3 md:mt-10">
          <h2>Empowering Creators.</h2>
        </div>

        <div className="flex justify-center">
          <h2>& simplifying design.</h2>
        </div>

        <div className="mt-3 justify-center md:flex md:mx-2">
          <img src={EdgeStudio} alt="EdgeStudio" />
        </div>

        <div className="flex justify-center font-bold mt-5">
          <h2>Description</h2>
        </div>

        <div className="flex justify-center">
          <p className="mt-3">
            Edge Studio is a cutting-edge design tool that empowers creators
            to bring their visions to life with ease and precision.
          </p>
        </div>

        <div className="flex justify-center font-bold mt-5">
          <h2>LANDING PAGE</h2>
        </div>

        <div className="flex justify-center mt-3">
          <img src={pic1} alt="Landing Page" />
        </div>

        <div className="flex justify-center font-bold mt-5">
          <h2>WIREFRAME & MOCKUP</h2>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {[1, 2].map(i => (
            <div key={i} className="basis-1/3 flex-1">
              <img
                src={`./src/assets/Edgemockup${i}.jpeg`}
                className="rounded-lg object-cover w-full h-full"
                alt={`mockup-${i}`}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-3 mb-10">
          <img src={WireFrame} alt="WireFrame" />
        </div>

        <div className="flex justify-center mt-3 md:mt-10 font-bold">
          <h2>LOGO</h2>
        </div>

        <div className="flex justify-center">
          <img src={Logo} alt="logo" className="h-60 w-60" />
        </div>

        <div className="flex justify-center mt-3 md:mt-10 font-bold">
          <h2>COLOR PALETTE</h2>
        </div>

        <div className="flex justify-center">
          <img
            src={colorpalette}
            alt="colorpalette"
            className="ml-5 h-16 w-96 md:w-full md:h-full"
          />
        </div>

        <div className="flex justify-center">
          <img src={Aurat} className="w-60 h-60" alt="Aurat" />
        </div>

        <div className="flex justify-center mt-1 mb-10">
          <h2 className="festive-regular2 text-4xl">
            Thank you for your time
          </h2>
        </div>

        <div className="flex justify-center mb-10 mx-5">
          <p>Feel free to provide your valuable suggestion and comments</p>
        </div>
      </div>
    </div>
  );
}

export default BrewNBake;
