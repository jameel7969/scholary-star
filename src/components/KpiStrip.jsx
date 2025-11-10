import React from "react";

const KpiStrip = () => {
  const stats = [
    { id: 1, value: "3,192+", label: "Successfully Trained" },
    { id: 2, value: "15,485+", label: "Classes Completed" },
    { id: 3, value: "97.55%", label: "Satisfaction Rate" },
    { id: 4, value: "97.55%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="w-full bg-teal-600 py-6 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-center py-10 md:py-14 text-center"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider opacity-90">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiStrip;
