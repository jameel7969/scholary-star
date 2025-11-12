import React, { useState } from "react";
import shapeArrow from "../assets/page-header-shape-1.png";
import pageHeaderBg from "../assets/page-header-bg.png";
import Breadcrumbs from "../components/Breadcrumbs";
import CourseCard from "../components/CourseCard";

// ✅ Import all category images
import category1 from "../assets/category-1.png";
import category2 from "../assets/category-2.png";
import category3 from "../assets/category-3.png";
import category4 from "../assets/category-4.png";
import category5 from "../assets/category-5.png";
import category6 from "../assets/category-6.png";
import category7 from "../assets/category-7.png";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";
import content1 from "../assets/content-1.png";

const Courses = () => {
  const subjects = [
    {
      id: "math",
      title: "Mathematics",
      image: category1,
      topics: ["Algebra", "Geometry", "Calculus", "Statistics"],
      desc: "Master numbers, patterns and problem solving.",
    },
    {
      id: "science",
      title: "Science",
      image: category2,
      topics: ["Biology", "Chemistry", "Physics", "Earth Science"],
      desc: "Explore life, matter and the universe with experiments.",
    },
    {
      id: "arts",
      title: "Arts",
      image: category3,
      topics: ["Drawing", "Music", "Theatre", "Design"],
      desc: "Grow your creativity with studio practice and critique.",
    },
    {
      id: "business",
      title: "Business",
      image: category4,
      topics: ["Accounting", "Marketing", "Finance", "Entrepreneurship"],
      desc: "Learn how companies work and how to build one.",
    },
    {
      id: "technology",
      title: "Technology",
      image: category5,
      topics: ["Web", "AI/ML", "Cloud", "Data"],
      desc: "Build software and modern tech skills for careers.",
    },
    {
      id: "languages",
      title: "Languages",
      image: category6,
      topics: ["English", "Spanish", "French", "German"],
      desc: "Speak with confidence and improve communication.",
    },
    {
      id: "health",
      title: "Health & Fitness",
      image: category7,
      topics: ["Nutrition", "Anatomy", "Wellness", "Sports"],
      desc: "Healthy body and mind through science-backed practice.",
    },
    {
      id: "history",
      title: "History",
      image: about1,
      topics: ["World", "Ancient", "Modern", "Culture"],
      desc: "Understand people and events that shaped our world.",
    },
    {
      id: "geo",
      title: "Geography",
      image: about2,
      topics: ["Maps", "Environment", "Climate", "Population"],
      desc: "Study the earth, resources and human patterns.",
    },
    {
      id: "eco",
      title: "Economics",
      image: content1,
      topics: ["Micro", "Macro", "Markets", "Policy"],
      desc: "Decisions, incentives and how markets operate.",
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(null);
  const openDrawer = (s) => {
    setActive(s);
    setDrawerOpen(true);
  };
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div>
      {/* Header with right image and left white overlay */}
      <section className="relative overflow-hidden bg-white">
        <img
          src={pageHeaderBg}
          alt=""
          className="absolute right-0 h-auto w-fit"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[50%] md:w-[40%] lg:w-[32%] bg-gradient-to-r from-white/95 via-white/85 to-transparent z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Breadcrumbs
            items={[{ to: "/", label: "Home" }, { label: "Subjects" }]}
          />
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            All Subjects
          </h1>
        </div>
        <img
          src={shapeArrow}
          alt="shape"
          className="pointer-events-none absolute left-8 top-9 h-14 w-14 z-20"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <p className="mt-2 max-w-2xl text-slate-700">
          Explore subjects across disciplines. Pick a subject to discover
          classes and learning paths.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
          {subjects.map((s) => (
            <article
              key={s.id}
              onClick={() => openDrawer(s)}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-xs text-slate-600">Core topics:</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                    {s.topics.slice(0, 4).map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Why study with us */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Why choose Scholary Star subjects?
          </h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-slate-700 text-sm">
            <li>Structured learning paths with clear outcomes</li>
            <li>Short, practical lessons you can apply immediately</li>
            <li>Mentor feedback and community Q&A</li>
            <li>Certificates for your portfolio</li>
          </ul>
        </div>
      </div>

      {/* Left drawer for subject details */}
      <div
        className={`fixed inset-0 z-50 ${
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {active && (
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto p-6">
                {/* ✅ Close button added at the top right */}
                <button
                  onClick={closeDrawer}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow hover:bg-slate-200 transition"
                >
                  ✕
                </button>

                <h3 className="text-xl font-bold text-slate-900">
                  {active.title}
                </h3>
                <p className="mt-1 text-slate-700">{active.desc}</p>
                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Topics
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                    {active.topics.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Classes
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>Beginner class — 6 weeks</li>
                    <li>Intermediate class — 8 weeks</li>
                    <li>Advanced class — 10 weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Courses;