import React from "react";
import { Link } from "react-router-dom";
import pageHeaderBg from "../assets/page-header-bg.png";
import shapeArrow from "../assets/page-header-shape-1.png";
import Breadcrumbs from "../components/Breadcrumbs";

// ✅ Import all blog images
import edBlog07 from "../assets/ed-blog-07.jpg";
import edBlog11 from "../assets/ed-blog-11.jpg";
import course09 from "../assets/course-09.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Student Achievement Best Practice for Schools",
      image: edBlog07,
      date: "Dec 12, 2024",
      tag: "Development",
    },
    {
      id: 2,
      title: "The Importance of Integrating Arts into Education",
      image: edBlog11,
      date: "Dec 12, 2024",
      tag: "Development",
    },
    {
      id: 3,
      title: "How To Learn Faster With Spaced Repetition",
      image: course09,
      date: "Nov 30, 2024",
      tag: "Learning",
    },
  ];
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
            items={[{ to: "/", label: "Home" }, { label: "Blog" }]}
          />
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Latest Blogs
          </h1>
        </div>
        <img
          src={shapeArrow}
          alt="shape"
          className="pointer-events-none absolute left-8 top-9 h-14 w-14 z-20"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <p className="mt-2 text-slate-700 max-w-2xl">
          Guides, ideas and updates from the Scholary Star team.
        </p>
        {/* Featured grid */}
        <div className="grid gap-6 md:grid-cols-2 mt-5">
          {posts.slice(0, 2).map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.id}`}
              className="group relative overflow-hidden rounded-3xl ring-1 ring-slate-200 block"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-80 w-full object-cover transition-transform duration-300 ease-out group-hover:-translate-y-1"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="inline-block rounded-full bg-teal-500/90 px-3 py-1 text-xs font-semibold text-white">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-white text-lg sm:text-xl md:text-2xl font-semibold">
                  {p.title}
                </h3>
                <div className="mt-3 text-white/90 text-sm">
                  {p.date} • 6 min read
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent list */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={`recent-${p.id}`}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full rounded-t-2xl object-cover"
              />
              <div className="p-5">
                <div className="text-xs text-emerald-700 font-semibold">
                  {p.tag}
                </div>
                <h3 className="mt-1 font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-1 text-xs text-slate-500">
                  {p.date} • 6 min read
                </div>
                <Link
                  to={`/blog/${p.id}`}
                  className="mt-3 inline-flex items-center gap-1 text-emerald-700 font-semibold"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="ml-1"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
