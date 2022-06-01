import React from "react";
import "../styles/hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div>
      <div
        className="w-full h-[90vh] top-[90px] bg-no-repeat bg-center bg-cover bg-random "
        // style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="w-full h-[100%] flex flex-col justify-center items-start text-white px-32 text-left hero bg-gradient-to-r from-[#131311]">
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <h1 className="font-semibold text-7xl hero-title">
              Good men look good
            </h1>
            <p className="text-base font-light py-4 hero-subtitle">
              Luther represents everything the new man is. We're
              forward-thinking visionaries. We embody these principles in
              everything we do. Every scrape. Every Shape
            </p>
            <div>
              <button className="m-2 but">
                <a href="/#appointment">Book Appointment</a>
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          <p className="text-center text-white text-2xl font-bold">
            Total Volume Secured: $42,104,783,662.47
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
