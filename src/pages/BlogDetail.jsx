import React from "react";
import { useParams, Link } from "react-router-dom";
import shapeArrow from "../assets/page-header-shape-1.png";

// ✅ Import all blog images
import edBlog07 from "../assets/ed-blog-07.jpg";
import edBlog11 from "../assets/ed-blog-11.jpg";
import course09 from "../assets/course-09.jpg";

const posts = {
  1: {
    id: 1,
    title: "Student Achievement Best Practice for Schools",
    image: edBlog07,
    date: "Dec 12, 2024",
    tag: "Development",
  },
  2: {
    id: 2,
    title: "The Importance of Integrating Arts into Education",
    image: edBlog11,
    date: "Dec 12, 2024",
    tag: "Development",
  },
  3: {
    id: 3,
    title: "How To Learn Faster With Spaced Repetition",
    image: course09,
    date: "Nov 30, 2024",
    tag: "Learning",
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts[id] || posts["1"];

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <p className="text-sm text-slate-500">
            Home /{" "}
            <Link to="/blog" className="underline">
              Blog
            </Link>{" "}
            / <span className="text-slate-900 font-semibold">Detail</span>
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {post.title}
          </h1>
          <div className="mt-2 text-slate-600">
            {post.date} • {post.tag}
          </div>
        </div>
        <img
          src={shapeArrow}
          alt="shape"
          className="pointer-events-none absolute left-8 top-9 h-14 w-14"
        />
      </section>

      <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12 prose prose-slate">
        <img src={post.image} alt={post.title} className="w-full rounded-2xl" />
        <p>
          Education is changing fast. In this article we explore practical
          strategies that schools and learners can adopt to improve outcomes.
          These insights are informed by our mentors' classroom experience and
          research-backed methods.
        </p>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Set clear learning goals and measure progress regularly.</li>
          <li>Use project-based learning to increase engagement.</li>
          <li>Provide quick, actionable feedback from mentors.</li>
        </ul>
        <blockquote>
          "When students work on real problems, motivation follows. Feedback
          turns effort into mastery."
        </blockquote>
        <p>
          Want more posts like this? Subscribe to our newsletter or follow us on
          social media for weekly updates on learning science, career growth and
          platform news.
        </p>
      </article>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <h3 className="text-2xl font-bold text-slate-900">Related Posts</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(posts)
            .filter((p) => p.id !== post.id)
            .map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.id}`}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition block"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full rounded-t-2xl object-cover"
                />
                <div className="p-5">
                  <div className="text-xs text-emerald-700 font-semibold">
                    {p.tag}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {p.date} • 6 min read
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
