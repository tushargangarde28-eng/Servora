import { Link } from "react-router-dom";
import { ArrowRight, Search, CalendarCheck, UserCheck, Star } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Search & Browse",
      description:
        "Explore dozens of service categories. Filter by location, price, and ratings to find the right fit.",
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Pick a time that works for you. Instant confirmation and reminder notifications keep you on track.",
      accent: "from-violet-500/20 to-fuchsia-500/10",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Get Served",
      description:
        "A verified professional arrives on time. Track progress, communicate, and pay securely in-app.",
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      number: "04",
      icon: Star,
      title: "Rate & Review",
      description:
        "Share your experience. Your feedback helps the community and rewards top professionals.",
      accent: "from-amber-500/20 to-yellow-500/10",
    },
  ];

  const audiences = [
    {
      icon: "👤",
      title: "For Customers",
      points: [
        "Browse verified professionals near you",
        "Transparent pricing — no hidden fees",
        "Secure online payments",
        "Real reviews from real customers",
        "24/7 customer support",
      ],
    },
    {
      icon: "🏢",
      title: "For Business Owners",
      points: [
        "Manage your entire team in one dashboard",
        "Assign jobs, track performance",
        "Automated invoicing & payments",
        "Customer database & CRM tools",
        "Analytics on revenue and growth",
      ],
    },
    {
      icon: "🛠️",
      title: "For Professionals",
      points: [
        "Build a strong public profile",
        "Get matched with nearby jobs",
        "Set your own schedule & rates",
        "Weekly payouts directly to your bank",
        "Grow your reputation with reviews",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Simple. Fast. Reliable.
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            How{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              SERVORA
            </span>{" "}
            works
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Four simple steps to book a professional, manage your team, or grow
            your business — all in one place.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="relative px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${step.accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-slate-500">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience section */}
      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for everyone
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Whether you're booking a service, running a business, or working
              independently — SERVORA has you covered.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                  {a.icon}
                </div>

                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {a.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-slate-950/0 p-8 text-center sm:p-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            Join thousands of customers, businesses, and professionals already on SERVORA.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:bg-slate-100 hover:shadow-white/20 sm:w-auto sm:text-base"
            >
              Create an Account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;