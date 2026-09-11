import { Plus, Search } from "lucide-react";

function BusinessCustomers() {
  const customers = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 11111", bookings: 12, spent: 18500, joined: "Aug 2026" },
    { id: 2, name: "Priya Verma", email: "priya@example.com", phone: "+91 98765 22222", bookings: 8, spent: 12400, joined: "Jul 2026" },
    { id: 3, name: "Amit Singh", email: "amit@example.com", phone: "+91 98765 33333", bookings: 5, spent: 6200, joined: "Sep 2026" },
    { id: 4, name: "Neha Gupta", email: "neha@example.com", phone: "+91 98765 44444", bookings: 21, spent: 34200, joined: "Jan 2026" },
    { id: 5, name: "Karan Malhotra", email: "karan@example.com", phone: "+91 98765 55555", bookings: 3, spent: 3800, joined: "Sep 2026" },
  ];

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Customers</h1>
          <p className="mt-1 text-sm text-slate-400">All customers who booked with you</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr className="text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Phone</th>
                <th className="px-6 py-3 font-medium">Bookings</th>
                <th className="px-6 py-3 font-medium">Total Spent</th>
                <th className="px-6 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {customers.map((c) => (
                <tr key={c.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-xs font-bold text-white">
                        {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </div>
                      <span className="font-medium text-white">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{c.email}</td>
                  <td className="px-6 py-4 text-slate-300">{c.phone}</td>
                  <td className="px-6 py-4 text-slate-300">{c.bookings}</td>
                  <td className="px-6 py-4 font-semibold text-white">{formatINR(c.spent)}</td>
                  <td className="px-6 py-4 text-slate-400">{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BusinessCustomers;