import React from "react";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
import team4 from "../assets/team-4.png";

const people = [
  { name: "Zaramane Mass Likan", role: "Mentor", img: team1 },
  { name: "Amelia Grace Lily", role: "Mentor", img: team2 },
  { name: "Mason Logan Dee", role: "Mentor", img: team3 },
  { name: "Isabella Charlotte", role: "Mentor", img: team4 },
];

const Instructors = () => {
  return (
    <div className="p-10 bg-[#eef4fb]">
      <section className="">
        <div className="mx-auto  max-w-7xl px-4 sm:px-6">
          <div className="rounded-[32px] p-6 sm:p-8 md:p-12">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M13 2v3m0 14v3m8-8h-3M5 12H2m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m10.607 0-2.121 2.121M8.757 15.243l-2.121 2.121"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Our Mentors
              </span>
            </div>
            <h2 className="mt-4 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
Explore Our World's Best Mentors
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {people.map((p) => (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl bg-white/90 ring-1 ring-slate-200 shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-emerald-600">{p.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
