import React from "react";
import Background from "../assets/black2.jpg";

function Cta() {
  return (
    <div id="appointment">
      <div
        className="bg-[#131311]"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
           
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Book Appointment</span>
              {/* <span className="block">Start using Workflow today.</span> */}
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Get 50% off your first appoints
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
