import React, { useState } from "react";
import { FiZap } from "react-icons/fi";
import { IoPlay } from "react-icons/io5";
import { useSelector } from "react-redux";
import VideoModal from "./VideoModal";

// ✅ Import all images
import heroShape3 from "../assets/hero-shape-3.png";
import heroShape4 from "../assets/hero-shape-4.png";
import promoShape2 from "../assets/promo-shape-2.png";
import heroAuthor1 from "../assets/hero-author-1.png";
import heroAuthor2 from "../assets/hero-author-2.png";
import heroAuthor3 from "../assets/hero-author-3.png";
import heroAuthor4 from "../assets/hero-author-4.png";
import team3 from "../assets/team-3.png";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth?.user);

  const phone = "923147969026";
  const message =
    "Hello Scholary Star Science Academy! I'd like to know more about your subjects and mentoring.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#eef4fb]">
      {/* decorative shapes */}
      <img
        src={heroShape3}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute -right-8 top-24 w-40 opacity-80"
      />
      <img
        src={heroShape4}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute left-16 bottom-16 w-10 opacity-70"
      />
      <img
        src={promoShape2}
        alt=""
        className="pointer-events-none select-none hidden xl:block absolute right-32 top-48 w-60 opacity-90"
      />
      <div className="container-wide flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 py-10 sm:py-16">
        {/* Left */}
        <div className="flex-1 w-full px-3 sm:px-0">
          <div className="pill w-fit">
            <span className="dot">
              <FiZap size={12} />
            </span>
            <span className="text-slate-700">Welcome to Online Education</span>
          </div>
          <h1 className="h1 mt-5 xl:!text-[48px] 2xl:!text-[56px]">
            Start learning from
            <br /> the world's{" "}
            <span className="text-teal-600">best institutions</span>
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-slate-700 btn-primary cursor-pointer"
            >
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white">
                <IoPlay className="text-slate-500" />
              </span>
              Watch the video
            </button>
            <button
              className="inline-flex items-center gap-2 text-slate-700 btn-primary cursor-pointer"
              onClick={handleClick}
            >
              <span className="py-1">Book the Demo</span>{" "}
            </button>
            <VideoModal
              open={open}
              onClose={() => setOpen(false)}
              videoUrl={"https://youtu.be/yR9ZW4mS_EA?si=FYGiYKZ6_w4loHpL"}
            />
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-700">
            <div className="avatar-stack">
              <img src={heroAuthor1} alt="" />
              <img src={heroAuthor2} alt="" />
              <img src={heroAuthor3} alt="" />
              <img src={heroAuthor4} alt="" />
            </div>
            <div className="text-sm">
              <span className="font-semibold">10k</span> Enrolment
            </div>
          </div>
          <div className="mt-6 text-slate-800">
            Explore <span className="text-teal-600 font-bold">50+ </span>
            Subjects
          </div>
        </div>

        {/* Right */}
        <div className="flex-[0.5] w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0">
          <div className="relative rounded-[24px] sm:rounded-[36px] overflow-hidden">
            <img
              src={team3}
              alt="Student"
              className="w-full h-auto rounded-[24px] sm:rounded-[36px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
