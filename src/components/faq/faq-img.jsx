import React from "react";

// Simple chevron icon
function Chevron({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Overline({ text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M13 2v3m0 14v3m8-8h-3M5 12H2m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m10.607 0-2.121 2.121M8.757 15.243l-2.121 2.121"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {text}
    </span>
  );
}

function TotalStudentsCard({ avatars = [], count = "25+" }) {
  return (
    <div className="shadow-xl/20 pointer-events-none select-none rounded-2xl bg-white p-5 shadow-xl">
      <p className="mb-3 text-sm font-semibold text-slate-700">
        Total Students
      </p>
      <div className="flex items-center gap-3">
        <div className="-space-x-3 isolate flex">
          {avatars.slice(0, 5).map((a, idx) => (
            <span
              key={idx}
              className="inline-block h-8 w-8 overflow-hidden rounded-full ring-2 ring-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.src}
                alt={a.alt ?? "student"}
                className="h-full w-full object-cover"
              />
            </span>
          ))}
        </div>
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
          {count}
        </span>
      </div>
    </div>
  );
}

export default function FaqImg({
  imageSrc,
  imageAlt = "Students",
  overline = "Most Asked Question",
  title = "Powerful Dashboard And High Performance Framework",
  studentsCount = "25+",
  avatars = [],
  faqs = [
    {
      id: 1,
      question: "What courses do you offer?",
      answer:
        "We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.",
    },
    {
      id: 2,
      question: "How Can Teachers Effectively Manage a Diverse Classroom?",
      answer:
        "Create inclusive lesson plans, use differentiated instruction, and foster a respectful classroom culture. Utilize formative assessments and adaptive tools to meet the needs of all learners.",
    },
    {
      id: 3,
      question: "How Is Special Education Delivered in Inclusive Classrooms?",
      answer:
        "Through co-teaching models, individualized education plans (IEPs), and assistive technologies that support students with diverse learning needs alongside their peers.",
    },
  ],
  className,
}) {
  const [active, setActive] = React.useState(0);
  return (
    <section
      className={["relative py-16 md:py-24", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col sm:flex-row items-center gap-12 px-4 sm:px-6 lg:gap-16">
        {/* Left: Image with floating total students card */}
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={imageSrc} alt={imageAlt} className="object-cover" />
          </div>

          <div className="absolute -bottom-8 left-8 sm:left-10">
            <TotalStudentsCard avatars={avatars} count={studentsCount} />
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="flex-[1.5]">
          <div className="mb-4">
            <Overline text={overline} />
          </div>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((f, idx) => (
              <Disclosure
                key={f.id}
                index={idx}
                question={f.question}
                answer={f.answer}
                open={active === idx}
                onToggle={() => setActive(active === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclosure({ index, question, answer, open, onToggle }) {
  return (
    <div className="px-5 py-4 sm:px-6">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-3 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-900">{question}</span>
        </div>
        <span className="text-slate-500">
          <Chevron open={open} />
        </span>
      </button>
      {open && <p className="pb-4 pr-2 text-slate-600">{answer}</p>}
    </div>
  );
}
