function StatCard({ label, value, change, icon: Icon, accent = "from-cyan-500/20 to-blue-500/10", trend }) {
  const isPositive = trend === "up";
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06] sm:p-6">
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-3xl transition-opacity group-hover:opacity-100`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {value}
          </p>
          {change && (
            <p
              className={`mt-2 text-xs font-semibold ${
                isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {isPositive ? "▲" : "▼"} {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;