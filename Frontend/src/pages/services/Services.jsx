import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Services() {
  const categories = [
    {
      icon: "🔧",
      title: "Home Services",
      description: "Plumbing, electrical, carpentry, painting, and general repairs.",
      services: ["Plumbing", "Electrical", "Carpentry", "Painting", "Handyman"],
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: "🧹",
      title: "Cleaning Services",
      description: "Deep cleaning, regular housekeeping, and commercial cleaning.",
      services: ["Home Cleaning", "Deep Cleaning", "Office Cleaning", "Sofa Cleaning", "Kitchen Cleaning"],
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      icon: "💇",
      title: "Beauty & Wellness",
      description: "Salon at home, spa, massage, and personal grooming services.",
      services: ["Salon at Home", "Massage", "Spa", "Hair Styling", "Makeup"],
      accent: "from-pink-500/20 to-rose-500/10",
    },
    {
      icon: "🩺",
      title: "Healthcare",
      description: "Home nursing, physiotherapy, elder care, and medical support.",
      services: ["Home Nursing", "Physiotherapy", "Elder Care", "Lab Tests", "Doctor Visit"],
      accent: "from-red-500/20 to-orange-500/10",
    },
    {
      icon: "📚",
      title: "Education & Tutoring",
      description: "Home tuition, exam prep, and skill-based coaching.",
      services: ["Home Tuition", "Math Tutoring", "Music Lessons", "Language Classes", "Test Prep"],
      accent: "from-violet-500/20 to-fuchsia-500/10",
    },
    {
      icon: "🚗",
      title: "Automotive",
      description: "Car wash, bike service, roadside assistance, and detailing.",
      services: ["Car Wash", "Bike Service", "Roadside Help", "Car Detailing", "Tyre Change"],
      accent: "from-amber-500/20 to-yellow-500/10",
    },
    {
      icon: "🎉",
      title: "Events & Photography",
      description: "Event planning, photography, catering, and decoration.",
      services: ["Photography", "Catering", "Decoration", "Event Planning", "DJ Services"],
      accent: "from-indigo-500/20 to-blue-500/10",
    },
    {
      icon: "💼",
      title: "Business & Consulting",
      description: "Accounting, legal advice, marketing, and IT consulting.",
      services: ["Accounting", "Legal Advice", "Digital Marketing", "IT Support", "Tax Filing"],
      accent: "from-slate-500/20 to-zinc-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            All Services in One Place
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find the perfect{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              professional
            </span>{" "}
            for any job
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From home repairs to personal care — SERVORA connects you with verified
            professionals across dozens of service categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-7"
              >
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                    {cat.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {cat.description}
                  </p>

                  {/* Tag chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.services.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                    {cat.services.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                        +{cat.services.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/services/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-cyan-400"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-slate-950/0 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Can't find what you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Tell us what service you're looking for and we'll match you with the
              right professional.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:bg-slate-100 hover:shadow-white/20"
            >
              Request a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;