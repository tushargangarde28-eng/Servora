function Step4BusinessProfile({ data, update, next, back }) {
  const businessTypes = [
    "Home Services", "Beauty & Wellness", "Repair & Maintenance",
    "Cleaning Services", "Healthcare", "Education", "Events",
    "Automotive", "Consulting", "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /api/business/profile
    // Backend inserts into `business_profiles` with owner_user_id = current user.
    next();
  };

  return (
    <>
      <button
        type="button"
        onClick={back}
        className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
      >
        ← Back
      </button>

      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Business information
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Tell us about your business so customers can find you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-300">
            Business name <span className="text-red-400">*</span>
          </label>
          <input
            id="businessName"
            type="text"
            required
            value={data.businessName}
            onChange={(e) => update({ businessName: e.target.value })}
            placeholder="Acme Home Services"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-slate-300">
            Business type
          </label>
          <select
            id="businessType"
            value={data.businessType}
            onChange={(e) => update({ businessType: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10"
          >
            <option value="" className="bg-slate-900">Select a category</option>
            {businessTypes.map((t) => (
              <option key={t} value={t} className="bg-slate-900">{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            value={data.description}
            onChange={(e) => update({ description: e.target.value })}
            placeholder="Briefly describe what your business offers..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="businessEmail" className="mb-2 block text-sm font-medium text-slate-300">
              Business email
            </label>
            <input
              id="businessEmail"
              type="email"
              value={data.businessEmail}
              onChange={(e) => update({ businessEmail: e.target.value })}
              placeholder="contact@business.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="businessPhone" className="mb-2 block text-sm font-medium text-slate-300">
              Business phone
            </label>
            <input
              id="businessPhone"
              type="tel"
              value={data.businessPhone}
              onChange={(e) => update({ businessPhone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-300">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={data.address}
            onChange={(e) => update({ address: e.target.value })}
            placeholder="123 Main Street"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-slate-300">City</label>
            <input
              id="city"
              type="text"
              value={data.city}
              onChange={(e) => update({ city: e.target.value })}
              placeholder="Mumbai"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="state" className="mb-2 block text-sm font-medium text-slate-300">State</label>
            <input
              id="state"
              type="text"
              value={data.state}
              onChange={(e) => update({ state: e.target.value })}
              placeholder="Maharashtra"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="mb-2 block text-sm font-medium text-slate-300">Pincode</label>
            <input
              id="pincode"
              type="text"
              value={data.pincode}
              onChange={(e) => update({ pincode: e.target.value })}
              placeholder="400001"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
        </div>

        <div>
          <label htmlFor="logoUrl" className="mb-2 block text-sm font-medium text-slate-300">
            Logo URL <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="logoUrl"
            type="url"
            value={data.logoUrl}
            onChange={(e) => update({ logoUrl: e.target.value })}
            placeholder="https://..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
        >
          Complete Registration
        </button>
      </form>
    </>
  );
}

export default Step4BusinessProfile;