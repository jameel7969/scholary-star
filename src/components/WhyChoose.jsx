import React from "react";

// ✅ Import all images
import promoImg1 from "../assets/promo-img-1.png";
import promoImg2 from "../assets/promo-img-2.png";
import promoImg3 from "../assets/promo-img-3.png";
import promo4 from "../assets/promo-4.png";
import promo5 from "../assets/promo-5.png";
import promo6 from "../assets/promo-6.png";
import promoShape1 from "../assets/promo-shape-1.png";
import heroShape4 from "../assets/hero-shape-4.png";
import promoShape2 from "../assets/promo-shape-2.png";

const WhyChoose = () => {
  const items = [
    {
      title: "Book Free Consultation",
      text: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: promoImg2,
      icon: promo4,
    },
    {
      title: "Make Easy Payment",
      text: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: promoImg1,
      icon: promo5,
    },
    {
      title: "Schedule First Lesson",
      text: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: promoImg3,
      icon: promo6,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      {/* background decorative shapes */}
      <img
        src={promoShape1}
        alt=""
        className="pointer-events-none select-none absolute left-8 top-20 w-24 opacity-50 hidden md:block"
      />
      <img
        src={heroShape4}
        alt=""
        className="pointer-events-none select-none absolute right-10 top-20 w-8 opacity-60 hidden lg:block"
      />
      <img
        src={promoShape2}
        alt=""
        className="pointer-events-none select-none absolute right-10 bottom-16 w-40 opacity-70 hidden md:block"
      />

      <div className="container-wide  py-16">
        <div className="text-center">
          <div className="pill mx-auto w-fit bg-white text-slate-700">
            <span>Why Choose Us</span>
          </div>
          <h2 className="h2 text-white mt-4">
            Explore Yourself All Over The World
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-10 md:gap-6">
          {items.map((it, idx) => (
            <div key={it.title} className="text-center relative">
              {/* divider lines between columns on desktop */}
              {idx < items.length - 1 && (
                <div className="hidden md:block absolute right-[-12px] top-10 bottom-10 w-px bg-white/10" />
              )}
              <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl">
                <img
                  src={it.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-semibold text-lg">{it.title}</h3>
              <p className="mt-3 text-slate-300 text-sm leading-6 max-w-sm mx-auto">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
