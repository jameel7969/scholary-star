import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/ed-blog-07.jpg";
import blog2 from "../assets/ed-blog-11.jpg";

const posts = [
  {
    id: 1,
    img: blog1,
    category: "Development",
    title: "Student Achievement Best Practice for Schools",
    date: "December 12, 2024",
    topic: "Science",
  },
  {
    id: 2,
    img: blog2,
    category: "Development",
    title: "The Importance of Integrating Arts into Education",
    date: "December 12, 2024",
    topic: "Arts",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M13 2v3m0 14v3m8-8h-3M5 12H2m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m10.607 0-2.121 2.121M8.757 15.243l-2.121 2.121"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </span>
  );
}

const NewsUpdates = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex justify-center">
          <Badge>News & Blogs</Badge>
        </div>
        <h2 className="mt-4 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Latest News Updates
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.id}`}
              className="group block relative overflow-hidden rounded-3xl ring-1 ring-slate-200 hover:ring-emerald-400 transition"
            >
              <article>
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-80 w-full object-cover transition-transform duration-300 ease-out group-hover:-translate-y-1"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-teal-500/90 px-3 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-6 text-white/90 text-sm">
                    <span className="inline-flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M8 7h8M7 12h10M7 17h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M12 6l7 12H5l7-12z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {p.topic}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
