import { Filter, Search } from "lucide-react";

function ProfessionalJobs() {
  const jobs = [
    { id: "JOB-201", customer: "Rahul Sharma", service: "AC Repair", date: "11 Sep 2026", time: "10:00 AM", address: "Andheri West", amount: 1500, status: "Completed" },
    { id: "JOB-202", customer: "Priya Verma", service: "AC Installation", date: "11 Sep 2026", time: "11:30 AM", address: "Bandra", amount: 2500, status: "In Progress" },
    { id: "JOB-203", customer: "Amit Singh", service: "AC Service", date: "11 Sep 2026", time: "3:00 PM", address: "Juhu", amount: 1200, status: "Upcoming" },
    { id: "JOB-199", customer: "Neha Gupta", service: "AC Repair", date: "10 Sep 2026", time: "2:00 PM", address: "Powai", amount: 1500, status: "Completed" },
    { id: "JOB-198", customer: "Karan Malhotra", service: "AC Installation", date: "09 Sep 2026", time: "4:30 PM", address: "Dadar", amount: 2500, status: "Completed" },
    { id: "JOB-197", customer: "Sneha Iyer", service: "AC Service", date: "08 Sep 2026", time: "11:00 AM", address: "Chembur", amount: 1200, status: "Cancelled" },
  ];

  const statusColor = {
    Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "In Progress": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    Upcoming: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">My Jobs</h1>
        <p className="mt-1 text-sm text-slate-400">All jobs assigned to you by your shop</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10"
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr className="text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Job ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">When</th>
                <th className="px-6 py-3 font-medium">Address</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {jobs.map((j) => (
                <tr key={j.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{j.id}</td>
                  <td className="px-6 py-4 font-medium text-white">{j.customer}</td>
                  <td className="px-6 py-4 text-slate-300">{j.service}</td>
                  <td className="px-6 py-4 text-slate-400">
                    <div className="text-xs">{j.date}</div>
                    <div className="text-xs">{j.time}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{j.address}</td>
                  <td className="px-6 py-4 font-semibold text-white">{formatINR(j.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[j.status]}`}>
                      {j.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalJobs;