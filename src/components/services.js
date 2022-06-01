import React from "react";
import "../styles/services.css";

const products1 = [
  {
    id: 1,
    name: "Adult Cut",
    // href: "#",
    // price: "$13",

    imageSrc:
      "https://images.unsplash.com/photo-1565766046621-5548ffdf30af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Beard Trip",
    // href: "#",
    // price: "$64",

    imageSrc:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Hair Wash",
    // href: "#",
    // price: "$32",

    imageSrc:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];
const products2 = [
  {
    id: 7,
    name: "Facial",
    // href: "#",
    // price: "$149",

    imageSrc:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 8,
    name: "Pedicure",
    // href: "#",
    // price: "$165",

    imageSrc:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 9,
    name: "Manicure",
    // href: "#",
    // price: "$118",

    imageSrc:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];



function Services() {
  return (
    <div className="bg-[#131311]" id="services">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        className="text-white text-3xl pt-24"
      >
        Services
      </h1>
      <div>
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Filters */}

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="mt-8">
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {products1.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                      data-aos-anchor-placement="center-center"
                      className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3 zoom"
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75 "
                      />
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                      data-aos-anchor-placement="center-center"
                      className="mt-4 flex items-center justify-between text-base font-medium text-white "
                    >
                      <h3 className="z-10">{product.name}</h3>
                      {/* <p>{product.price}</p> */}
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="more-products-heading"
              className="mt-16 pb-24"
            >
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {products2.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                      data-aos-anchor-placement="center-center"
                      className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3 zoom"
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                      data-aos-anchor-placement="center-center"
                      className="mt-4 flex items-center justify-between text-base font-medium text-white z-10"
                    >
                      <h3 className="z-10">{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-white">
                      {product.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;
