import React, { useState } from "react";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
import team4 from "../assets/team-4.png";
import team5 from "../assets/team-5.png";
import team6 from "../assets/team-6.png";
import team7 from "../assets/team-7.png";
import team8 from "../assets/team-8.png";
import shapeArrow from "../assets/page-header-shape-1.png";
import pageHeaderBg from "../assets/page-header-bg.png";
import Breadcrumbs from "../components/Breadcrumbs";

const people = [
  { name: "William Samuel", role: "Mentor", img: team1, tone: "emerald", qualification: "MSc Computer Science", experience: "8+ years teaching Web Development", bio: "Specializes in modern JS frameworks and frontend architecture." },
  { name: "Olivia Sophia", role: "Mentor", img: team2, tone: "rose", qualification: "MBA Marketing", experience: "6+ years in Digital Marketing", bio: "Focus on growth strategies, SEO, and analytics." },
  { name: "Jacob Mason", role: "Mentor", img: team3, tone: "sky", qualification: "BSc Software Engineering", experience: "7+ years as Full‑stack Engineer", bio: "Teaches backend APIs, databases, and DevOps basics." },
  { name: "Amelia Grace", role: "Mentor", img: team4, tone: "violet", qualification: "MA Design", experience: "9+ years UI/UX", bio: "Design thinking, prototyping, and usability testing." },
  { name: "Liam Carter", role: "Mentor", img: team5, tone: "amber", qualification: "PhD Data Science", experience: "10+ years ML/AI", bio: "Machine learning pipelines and practical AI." },
  { name: "Sophia Turner", role: "Mentor", img: team6, tone: "teal", qualification: "M.Ed Education", experience: "12+ years Teaching", bio: "Pedagogy and curriculum design expert." },
  { name: "Noah Bennett", role: "Mentor", img: team7, tone: "indigo", qualification: "BEng Computer", experience: "5+ years Mobile Dev", bio: "Cross‑platform apps and performance optimization." },
  { name: "Emma Collins", role: "Mentor", img: team8, tone: "cyan", qualification: "MSc Cloud Computing", experience: "8+ years Cloud/DevOps", bio: "Cloud-native architectures and CI/CD." },
];

function toneClass(tone) {
  const map = {
    emerald: "from-emerald-600 to-emerald-700",
    rose: "from-rose-500 to-rose-600",
    sky: "from-sky-500 to-sky-600",
    violet: "from-violet-500 to-violet-600",
    amber: "from-amber-500 to-amber-600",
    teal: "from-teal-500 to-teal-600",
    indigo: "from-indigo-500 to-indigo-600",
    cyan: "from-cyan-500 to-cyan-600",
  };
  return map[tone] || map.emerald;
}

const Mentors = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(null);
  const openDrawer = (p) => { setActive(p); setDrawerOpen(true); };
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <div>
      {/* Page header with right image and left white overlay */}
      <section className="relative overflow-hidden bg-white">
        <img
          src={pageHeaderBg}
          alt=""
          className="absolute right-0 h-auto w-fit"
          style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)' }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[50%] md:w-[40%] lg:w-[32%] bg-gradient-to-r from-white/95 via-white/85 to-transparent z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <Breadcrumbs items={[{to:'/',label:'Home'},{label:'Mentor'}]} />
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Mentor
          </h1>
        </div>
        <img
          src={shapeArrow}
          alt="shape"
          className="pointer-events-none absolute left-8 top-9 h-14 w-14 z-20"
        />
        {/* right hero image */}
      </section>

      {/* Grid */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {people.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm"
              >
                <article className="group relative overflow-hidden rounded-2xl cursor-pointer" onClick={() => openDrawer(p)}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-[380px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div
                    className={`absolute inset-x-4 -bottom-20 rounded-xl p-4 flex items-center justify-between text-white shadow-lg transition-all duration-300 group-hover:bottom-4 bg-gradient-to-r ${toneClass(
                      p.tone
                    )}`}
                  >
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-white/90 text-xs">{p.role}</div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); openDrawer(p); }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M18 8a3 3 0 10-2.83-4H15a3 3 0 100 6 3 3 0 003-2zM6 14a3 3 0 10-2.83 4H3a3 3 0 100-6 3 3 0 003 2zm9-7l-6 3m0 5l6-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drawer */}
      <div className={`fixed inset-0 z-50 ${drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-900/50 transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeDrawer} />
        <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {active && (
            <div className="flex h-full flex-col">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img src={active.img} alt={active.name} className="h-full w-full object-cover object-top" />
                <button onClick={closeDrawer} className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center  bg-white text-slate-700 shadow">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <h3 className="text-xl font-bold text-slate-900">{active.name}</h3>
                <p className="text-slate-600">{active.role}</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Qualification</div>
                    <div className="mt-1 text-slate-800">{active.qualification}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Experience</div>
                    <div className="mt-1 text-slate-800">{active.experience}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">About</div>
                    <p className="mt-1 text-slate-700 leading-relaxed">{active.bio}</p>
                  </div>
                </div>
              </div>
              <div className="border-t p-4">
                <button onClick={closeDrawer} className="w-full rounded-lg bg-emerald-600 py-2.5 font-semibold text-white hover:bg-emerald-500">Close</button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Mentors;
