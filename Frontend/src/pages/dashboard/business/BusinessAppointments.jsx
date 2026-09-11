import { Plus, Filter, Search } from "lucide-react";

function BusinessAppointments() {
  const appointments = [
    { id: "APT-1041", customer: "Rahul Sharma", service: "AC Repair", pro: "Suresh P.", date: "11 Sep 2026", time: "10:00 AM", status: "Confirmed", amount: 1500 },
    { id: "APT-1042", customer: "Priya Verma", service: "Home Cleaning", pro: "Meena K.", date: "11 Sep 2026", time: "11:30 AM", status: "In Progress", amount: 2200 },
    { id: "APT-1043", customer: "Amit Singh", service: "Plumbing", pro: "Ravi K.", date: "11 Sep 2026", time: "1:00 PM", status: "Pending", amount: 800 },
    { id: "APT-1044", customer: "Neha Gupta", service: "Salon at Home", pro: "Anita S.", date: "11 Sep 2026", time: "3:30 PM", status: "Confirmed", amount: 1800 },
    { id: "APT-1045", customer: "Karan Malhotra", service: "Electrical", pro: "Deepak R.", date: "12 Sep 2026", time: "9:00 AM", status: "Confirmed", amount: 1200 },
    { id: "APT-1046", customer: "Sneha Iyer", service: "Yoga at Home", pro: "Kavita M.", date: "12 Sep 2026", time: "7:00 AM", status: "Cancelled", amount: 900 },
  ];

  const statusColor = {
    Confirmed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "In Progress": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    Pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Appointments</h1>
          <p className="mt-1 text-sm text-slate-400">Manage all bookings across your team</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
          New Appointment
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by customer, service, or ID..."
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
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Professional</th>
                <th className="px-6 py-3 font-medium">Date & Time</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {appointments.map((a) => (
                <tr key={a.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{a.id}</td>
                  <td className="px-6 py-4 font-medium text-white">{a.customer}</td>
                  <td className="px-6 py-4 text-slate-300">{a.service}</td>
                  <td className="px-6 py-4 text-slate-300">{a.pro}</td>
                  <td className="px-6 py-4 text-slate-400">
                    <div className="text-xs">{a.date}</div>
                    <div className="text-xs">{a.time}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">{formatINR(a.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[a.status]}`}>
                      {a.status}
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

export default BusinessAppointments;