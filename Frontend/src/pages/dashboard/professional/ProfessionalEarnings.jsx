import { TrendingUp, Wallet, Clock } from "lucide-react";

function ProfessionalEarnings() {
  const summary = [
    { label: "This Month", value: 32000, icon: Wallet, accent: "from-emerald-500/20 to-teal-500/10" },
    { label: "Last Month", value: 28500, icon: TrendingUp, accent: "from-cyan-500/20 to-blue-500/10" },
    { label: "Pending Payout", value: 6200, icon: Clock, accent: "from-amber-500/20 to-yellow-500/10" },
  ];

  const transactions = [
    { id: "TXN-501", job: "JOB-201", customer: "Rahul Sharma", service: "AC Repair", date: "11 Sep 2026", amount: 1500, status: "Paid" },
    { id: "TXN-500", job: "JOB-199", customer: "Neha Gupta", service: "AC Repair", date: "10 Sep 2026", amount: 1500, status: "Paid" },
    { id: "TXN-499", job: "JOB-198", customer: "Karan Malhotra", service: "AC Installation", date: "09 Sep 2026", amount: 2500, status: "Paid" },
    { id: "TXN-498", job: "JOB-195", customer: "Ravi Sharma", service: "AC Service", date: "07 Sep 2026", amount: 1200, status: "Pending" },
    { id: "TXN-497", job: "JOB-194", customer: "Anita Desai", service: "AC Repair", date: "06 Sep 2026", amount: 1500, status: "Paid" },
  ];

  const statusColor = {
    Paid: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  };

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Earnings</h1>
        <p className="mt-1 text-sm text-slate-400">Track your income and payouts</p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {summary.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20"
            >
              <div className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-3xl transition-opacity group-hover:opacity-100`} />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {s.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {formatINR(s.value)}
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transactions */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="border-b border-white/10 px-6 py-4">
          <h2 className="text-base font-semibold text-white">Recent Transactions</h2>
          <p className="text-xs text-slate-500">Your latest payouts</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr className="text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Txn ID</th>
                <th className="px-6 py-3 font-medium">Job</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((t) => (
                <tr key={t.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{t.id}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{t.job}</td>
                  <td className="px-6 py-4 font-medium text-white">{t.customer}</td>
                  <td className="px-6 py-4 text-slate-300">{t.service}</td>
                  <td className="px-6 py-4 text-slate-400">{t.date}</td>
                  <td className="px-6 py-4 font-semibold text-white">{formatINR(t.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[t.status]}`}>
                      {t.status}
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

export default ProfessionalEarnings;