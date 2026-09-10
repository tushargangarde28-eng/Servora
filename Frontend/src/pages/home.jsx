import { ArrowRight } from "lucide-react";

function Home() {
  const userTypes = [
    {
      icon: "🏢",
      title: "Business Owners",
      description:
        "Manage customers, professionals, appointments, invoices, payments, and your entire service business.",
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: "🛠️",
      title: "Service Professionals",
      description:
        "Build your professional profile, manage jobs, appointments, earnings, and work independently or with a business.",
      accent: "from-violet-500/20 to-fuchsia-500/10",
    },
    {
      icon: "👤",
      title: "Customers",
      description:
        "Find trusted services, request professionals, manage appointments, payments, and reviews.",
      accent: "from-emerald-500/20 to-teal-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28">

        {/* Background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[700px] sm:w-[700px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:h-[400px] sm:w-[400px]"
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">

          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            One Platform. Every Service.
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">Connect.</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Manage.
            </span>
            <br />
            <span className="text-white">Grow.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            SERVORA brings business owners, service professionals, and
            customers together in one powerful platform.
          </p>

          {/* CTAs */}
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:bg-slate-100 hover:shadow-white/20 sm:w-auto sm:text-base"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Explore Services
            </button>
          </div>

          {/* User Types */}
          <div className="mx-auto mt-24 grid max-w-6xl gap-5 md:grid-cols-3">
            {userTypes.map((type) => (
              <div
                key={type.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${type.accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                    {type.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;