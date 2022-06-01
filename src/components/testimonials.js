import React from "react";
import "../styles/testimonial.css";
import Background from "../assets/bgbarbernew.jpg";

function Testimonials() {
  return (
    <div id="testimonials">
      <div
        class="bg-white flex items-center justify-center flex-col testim"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          <h1 className="text-black text-3xl pb-4">Testimonials</h1>
          <div class=" text-center">
            <div class="text-7xl text-blue-300 leading-10">”</div>
            <div class="font-medium max-w-xl text-xl">
              Luther gets me in a way no other barber does. I stuck to this for
              life
            </div>
            <div class="mt-5">
              {/* <span class="font-bold">Chris Serraton</span> */}
              <span class="text-gray-500 font-medium"> Chris Serraton</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
