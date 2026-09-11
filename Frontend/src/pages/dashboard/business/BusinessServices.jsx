import { Plus, Edit, Trash2 } from "lucide-react";

function BusinessServices() {
  const services = [
    { id: 1, name: "AC Repair", category: "Home Services", price: 1500, duration: "60 min", active: true },
    { id: 2, name: "Home Cleaning", category: "Cleaning", price: 2200, duration: "120 min", active: true },
    { id: 3, name: "Plumbing", category: "Home Services", price: 800, duration: "45 min", active: true },
    { id: 4, name: "Salon at Home", category: "Beauty", price: 1800, duration: "90 min", active: true },
    { id: 5, name: "Electrical Work", category: "Home Services", price: 1200, duration: "60 min", active: false },
    { id: 6, name: "Yoga at Home", category: "Wellness", price: 900, duration: "60 min", active: true },
  ];

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Services</h1>
          <p className="mt-1 text-sm text-slate-400">Manage your service catalog</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
          Add Service
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-400">
                  {s.category}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{s.name}</h3>
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  s.active
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-500/15 text-slate-400 border-slate-500/30"
                }`}
              >
                {s.active ? "Active" : "Inactive"}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
              <div>
                <div className="text-lg font-bold text-white">{formatINR(s.price)}</div>
                <div className="text-xs text-slate-500">{s.duration}</div>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                  aria-label="Edit"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessServices;