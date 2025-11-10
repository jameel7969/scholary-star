import React from "react";
import about2 from "../assets/about-img-2.jpg";
import shapeArrow from "../assets/page-header-shape-1.png";
import pageHeaderBg from "../assets/page-header-bg.png";
import Breadcrumbs from "../components/Breadcrumbs";

const About = () => {
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
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <Breadcrumbs items={[{to:'/',label:'Home'},{label:'About'}]} />
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            About Us
          </h1>
        </div>
        <img
          src={shapeArrow}
          alt="shape"
          className="pointer-events-none absolute left-8 top-9 h-14 w-14 z-20"
        />
      </section>

      {/* Intro - Who we are */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={about2}
            alt="Team working"
            className="rounded-2xl w-full h-[450px] object-cover shadow"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            About Scholary Star Academy
          </h3>
          <p className="mt-3 text-slate-700">
            For 7+ years, Scholary Star has been empowering students with
            modern, flexible and effective learning. We provide one‑to‑one
            mentorship, small group classes and complete home‑tuition support so
            every learner can study with confidence.
          </p>
          <p className="mt-3 text-slate-700">
            Our approach blends experienced tutors, a structured curriculum and
            project‑based practice. Whether you are preparing for school,
            college or professional growth, we match you with the right mentor
            and a clear learning path.
          </p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              Expert tutors for every level
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              Personalized learning plans
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              Regular progress tracking
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              Online, home‑tuition and hybrid options
            </li>
          </ul>
        </div>
      </section>

      {/* Mission & Vision band */}
      <section className="bg-emerald-700/95 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <h3 className="text-2xl font-bold">Mission & Vision</h3>
          <p className="mt-3 max-w-4xl text-white/90">
            Our mission is to empower students with the knowledge and confidence
            to succeed. We aim to be a trusted academy that offers flexible,
            consistent and effective learning solutions—supported by caring
            mentors, modern resources and a growth mindset.
          </p>
        </div>
      </section>

      {/* Programs we offer */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Programs We Offer
          </h3>
          <a
            href="/courses"
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            View More
          </a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "O / A Level Preparation",
              img: "/src/assets/category-2.png",
              d: "Focused preparation with past papers, concepts and exam strategy.",
            },
            {
              t: "Nursery to Masters",
              img: "/src/assets/category-4.png",
              d: "Strong foundation classes with caring mentors for every grade.",
            },
            {
              t: "IELTS Preparation",
              img: "/src/assets/category-7.png",
              d: "Targeted speaking, listening, reading and writing practice.",
            },
            {
              t: "Spoken English",
              img: "/src/assets/category-6.png",
              d: "Build fluency and confidence with interactive sessions.",
            },
            {
              t: "IB Diploma",
              img: "/src/assets/category-5.png",
              d: "Subject‑wise support, assessments and internal guidance.",
            },
            {
              t: "Computer & Tech Skills",
              img: "/src/assets/category-1.png",
              d: "Web, AI/ML, data and productivity tools for modern careers.",
            },
          ].map((v) => (
            <article
              key={v.t}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={v.img}
                  alt=""
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{v.t}</h4>
                  <p className="mt-1 text-sm text-slate-600">{v.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {[
            ["45K+", "Active Students"],
            ["200+", "Faculty Courses"],
            ["130+", "Best Professors"],
            ["50+", "Awards Achieved"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="py-6 flex items-center justify-center text-center"
            >
              <div>
                <div className="text-3xl font-extrabold">{v}</div>
                <div className="text-xs uppercase tracking-wider mt-1 opacity-90">
                  {l}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning levels */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h3 className="text-2xl font-bold text-slate-900 text-center">
          Things that make us proud
        </h3>
        <p className="mt-2 text-center text-slate-600">
          We offer learning levels to meet the diverse needs of our students.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Beginner",
              d: "Perfect for young learners; builds a strong foundation.",
              e: "🌱",
            },
            {
              t: "Intermediate",
              d: "From grade 6–8; connects concepts and increases complexity.",
              e: "📘",
            },
            {
              t: "Advanced",
              d: "Grade 9–12 and beyond; prepares for higher education.",
              e: "🚀",
            },
            {
              t: "Mastery",
              d: "For bachelor’s & master’s levels; deep dives and specialization.",
              e: "🎓",
            },
          ].map((v) => (
            <div
              key={v.t}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-2xl">{v.e}</div>
              <div className="mt-3 font-semibold text-slate-900">{v.t}</div>
              <p className="mt-2 text-slate-700 text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-2xl font-extrabold">
              Ready to start learning?
            </h4>
            <p className="text-slate-300 mt-1">
              Join thousands of learners and build job‑ready skills.
            </p>
          </div>
          <a
            href="/courses"
            className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-900 hover:bg-emerald-400"
          >
            Browse Subjects
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
