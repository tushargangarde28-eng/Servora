import { Plus, Download } from "lucide-react";

function BusinessInvoices() {
  const invoices = [
    { id: "INV-1042", customer: "Rahul Sharma", issued: "10 Sep 2026", due: "17 Sep 2026", amount: 1500, status: "Paid" },
    { id: "INV-1041", customer: "Priya Verma", issued: "09 Sep 2026", due: "16 Sep 2026", amount: 2200, status: "Pending" },
    { id: "INV-1040", customer: "Amit Singh", issued: "08 Sep 2026", due: "15 Sep 2026", amount: 800, status: "Overdue" },
    { id: "INV-1039", customer: "Neha Gupta", issued: "07 Sep 2026", due: "14 Sep 2026", amount: 1800, status: "Paid" },
    { id: "INV-1038", customer: "Karan Malhotra", issued: "06 Sep 2026", due: "13 Sep 2026", amount: 1200, status: "Paid" },
  ];

  const statusColor = {
    Paid: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Overdue: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  const totalPaid = invoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const totalPending = invoices.filter((i) => i.status !== "Paid").reduce((s, i) => s + i.amount, 0);

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Invoices</h1>
          <p className="mt-1 text-sm text-slate-400">Track payments and billing</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
          >
            <Plus className="h-4 w-4" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">Total Paid</p>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">{formatINR(totalPaid)}</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-amber-400">Outstanding</p>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">{formatINR(totalPending)}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr className="text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Invoice</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Issued</th>
                <th className="px-6 py-3 font-medium">Due</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((inv) => (
                <tr key={inv.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{inv.id}</td>
                  <td className="px-6 py-4 font-medium text-white">{inv.customer}</td>
                  <td className="px-6 py-4 text-slate-400">{inv.issued}</td>
                  <td className="px-6 py-4 text-slate-400">{inv.due}</td>
                  <td className="px-6 py-4 font-semibold text-white">{formatINR(inv.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor[inv.status]}`}>
                      {inv.status}
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

export default BusinessInvoices;