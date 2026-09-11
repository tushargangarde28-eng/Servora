import {
  Calendar, Users, DollarSign, Briefcase,
  ArrowRight, TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../../../components/dashboard/StatCard";

function BusinessDashboard() {
  // TODO: replace with API calls
  const stats = [
    { label: "Today's Appointments", value: "12", change: "+8% vs yesterday", trend: "up", icon: Calendar, accent: "from-cyan-500/20 to-blue-500/10" },
    { label: "Active Team", value: "8", change: "1 on leave", trend: "down", icon: Users, accent: "from-violet-500/20 to-fuchsia-500/10" },
    { label: "Revenue (This Month)", value: "₹2,45,000", change: "+12% vs last month", trend: "up", icon: DollarSign, accent: "from-emerald-500/20 to-teal-500/10" },
    { label: "Pending Jobs", value: "5", change: "2 due today", trend: "down", icon: Briefcase, accent: "from-amber-500/20 to-yellow-500/10" },
  ];

  const upcomingAppointments = [
    { id: 1, customer: "Rahul Sharma", service: "AC Repair", pro: "Suresh P.", time: "10:00 AM", status: "Confirmed" },
    { id: 2, customer: "Priya Verma", service: "Home Cleaning", pro: "Meena K.", time: "11:30 AM", status: "In Progress" },
    { id: 3, customer: "Amit Singh", service: "Plumbing", pro: "Ravi K.", time: "1:00 PM", status: "Pending" },
    { id: 4, customer: "Neha Gupta", service: "Salon at Home", pro: "Anita S.", time: "3:30 PM", status: "Confirmed" },
  ];

  const recentActivity = [
    { id: 1, text: "New booking from Rahul Sharma", time: "5 min ago", dot: "bg-cyan-400" },
    { id: 2, text: "Invoice #INV-1042 paid ₹4,500", time: "32 min ago", dot: "bg-emerald-400" },
    { id: 3, text: "Ravi Kumar completed a job", time: "1 hour ago", dot: "bg-violet-400" },
    { id: 4, text: "New customer registered", time: "2 hours ago", dot: "bg-amber-400" },
  ];

  const statusColor = {
    Confirmed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "In Progress": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    Pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, Amit 👋
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Here's what's happening with your business today.
          </p>
        </div>
        <Link
          to="/dashboard/business/appointments"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          View Appointments
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

        {/* Upcoming appointments (2/3) */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-white">Upcoming Appointments</h2>
              <p className="text-xs text-slate-500">Today's schedule</p>
            </div>
            <Link
              to="/dashboard/business/appointments"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all →
            </Link>
          </div>

          <div className="divide-y divide-white/5">
            {upcomingAppointments.map((a) => (
              <div
                key={a.id}
                className="flex flex-col gap-3 px-6 py-4 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-white">
                    {a.time.split(":")[0]}
                    <span className="text-[8px] uppercase">{a.time.includes("PM") ? "PM" : "AM"}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{a.customer}</p>
                    <p className="text-xs text-slate-400">
                      {a.service} • {a.pro}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[a.status]}`}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity (1/3) */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="text-base font-semibold text-white">Recent Activity</h2>
            <p className="text-xs text-slate-500">Latest updates</p>
          </div>

          <ul className="space-y-4 p-6">
            {recentActivity.map((r) => (
              <li key={r.id} className="flex gap-3">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${r.dot}`} />
                <div>
                  <p className="text-sm text-slate-300">{r.text}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{r.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Add Team Member", desc: "Onboard a professional", icon: Users, to: "/dashboard/business/team" },
          { title: "Create Invoice", desc: "Bill a customer", icon: DollarSign, to: "/dashboard/business/invoices" },
          { title: "Add Service", desc: "Expand your offerings", icon: Briefcase, to: "/dashboard/business/services" },
          { title: "View Analytics", desc: "Track growth", icon: TrendingUp, to: "/dashboard/business/settings" },
        ].map((q) => {
          const Icon = q.icon;
          return (
            <Link
              key={q.title}
              to={q.to}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <p className="text-sm font-semibold text-white">{q.title}</p>
              <p className="mt-1 text-xs text-slate-400">{q.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BusinessDashboard;