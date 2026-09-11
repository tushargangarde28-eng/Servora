import { Link } from "react-router-dom";
import { Calendar, DollarSign, Star, Briefcase, ArrowRight } from "lucide-react";
import StatCard from "../../../components/dashboard/StatCard";

function ProfessionalDashboard() {
  // TODO: replace with API calls
  const stats = [
    { label: "Today's Jobs", value: "3", change: "Next at 11:30 AM", trend: "up", icon: Calendar, accent: "from-cyan-500/20 to-blue-500/10" },
    { label: "This Week", value: "₹8,400", change: "+15% vs last week", trend: "up", icon: DollarSign, accent: "from-emerald-500/20 to-teal-500/10" },
    { label: "Rating", value: "4.8", change: "From 47 reviews", trend: "up", icon: Star, accent: "from-amber-500/20 to-yellow-500/10" },
    { label: "Completed Jobs", value: "126", change: "All time", trend: "up", icon: Briefcase, accent: "from-violet-500/20 to-fuchsia-500/10" },
  ];

  const todayJobs = [
    { id: 1, customer: "Rahul Sharma", service: "AC Repair", time: "10:00 AM", address: "Andheri West", status: "Completed" },
    { id: 2, customer: "Priya Verma", service: "AC Installation", time: "11:30 AM", address: "Bandra", status: "In Progress" },
    { id: 3, customer: "Amit Singh", service: "AC Service", time: "3:00 PM", address: "Juhu", status: "Upcoming" },
  ];

  const statusColor = {
    Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "In Progress": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    Upcoming: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  };

  // Current shop connection status (null = not linked)
  const linkedShop = { name: "Acme Home Services", since: "Aug 2026" };

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Hey Suresh 👋
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Here's your schedule and earnings for today.
          </p>
        </div>
        <Link
          to="/dashboard/professional/jobs"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          View Jobs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Two-column */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Today's jobs */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-white">Today's Jobs</h2>
              <p className="text-xs text-slate-500">3 assignments</p>
            </div>
            <Link
              to="/dashboard/professional/jobs"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all →
            </Link>
          </div>

          <div className="divide-y divide-white/5">
            {todayJobs.map((j) => (
              <div
                key={j.id}
                className="flex flex-col gap-3 px-6 py-4 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-white">
                    {j.time.split(":")[0]}
                    <span className="text-[8px] uppercase">{j.time.includes("PM") ? "PM" : "AM"}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{j.customer}</p>
                    <p className="text-xs text-slate-400">
                      {j.service} • {j.address}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[j.status]}`}
                >
                  {j.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shop connection card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <h2 className="text-base font-semibold text-white">Shop Connection</h2>
          <p className="mt-1 text-xs text-slate-500">
            {linkedShop ? "You're currently linked to a shop" : "Link with a shop to receive jobs"}
          </p>

          {linkedShop ? (
            <div className="mt-5">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Linked
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{linkedShop.name}</p>
                <p className="text-xs text-slate-500">Since {linkedShop.since}</p>
              </div>
              <Link
                to="/dashboard/professional/shops"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Manage
              </Link>
            </div>
          ) : (
            <Link
              to="/dashboard/professional/shops"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
            >
              Find a Shop
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfessionalDashboard;