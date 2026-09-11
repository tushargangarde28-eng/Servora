function BusinessSettings() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your business profile and preferences</p>
      </div>

      {/* Business Profile */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
        <h2 className="text-base font-semibold text-white">Business Profile</h2>
        <p className="mt-1 text-xs text-slate-500">This information appears on your public profile</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-300">Business name</label>
            <input id="businessName" defaultValue="Acme Home Services" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10" />
          </div>
          <div>
            <label htmlFor="businessEmail" className="mb-2 block text-sm font-medium text-slate-300">Business email</label>
            <input id="businessEmail" defaultValue="contact@acme.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10" />
          </div>
          <div>
            <label htmlFor="businessPhone" className="mb-2 block text-sm font-medium text-slate-300">Business phone</label>
            <input id="businessPhone" defaultValue="+91 98765 43210" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-300">Address</label>
            <input id="address" defaultValue="123 Main Street, Mumbai" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10" />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
        <h2 className="text-base font-semibold text-white">Notifications</h2>
        <p className="mt-1 text-xs text-slate-500">Choose what updates you want to receive</p>

        <div className="mt-6 space-y-4">
          {[
            { label: "New appointment booked", desc: "When a customer books a service", on: true },
            { label: "Payment received", desc: "When an invoice is paid", on: true },
            { label: "Team member updates", desc: "When a professional joins or leaves", on: false },
            { label: "Weekly summary", desc: "Get a weekly report via email", on: true },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <div>
                <p className="text-sm font-medium text-white">{n.label}</p>
                <p className="text-xs text-slate-500">{n.desc}</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" defaultChecked={n.on} className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-white/10 transition peer-checked:bg-cyan-500 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessSettings;