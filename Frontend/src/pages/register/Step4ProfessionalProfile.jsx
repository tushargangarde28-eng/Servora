function Step4ProfessionalProfile({ data, update, next, back }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /api/professional/profile
    // For now this only updates `users` + `user_roles`.
    // Once you add a `professional_profiles` table, POST there too.
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
          Professional profile
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Help customers understand what you do
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="professionalTitle" className="mb-2 block text-sm font-medium text-slate-300">
            Professional title <span className="text-red-400">*</span>
          </label>
          <input
            id="professionalTitle"
            type="text"
            required
            value={data.professionalTitle}
            onChange={(e) => update({ professionalTitle: e.target.value })}
            placeholder="e.g. Licensed Electrician"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div>
          <label htmlFor="professionalBio" className="mb-2 block text-sm font-medium text-slate-300">
            Short bio
          </label>
          <textarea
            id="professionalBio"
            rows={4}
            value={data.professionalBio}
            onChange={(e) => update({ professionalBio: e.target.value })}
            placeholder="Tell customers about your experience, skills, and specialties..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="professionalPhone" className="mb-2 block text-sm font-medium text-slate-300">
              Contact phone
            </label>
            <input
              id="professionalPhone"
              type="tel"
              value={data.professionalPhone}
              onChange={(e) => update({ professionalPhone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="professionalCity" className="mb-2 block text-sm font-medium text-slate-300">
              City
            </label>
            <input
              id="professionalCity"
              type="text"
              value={data.professionalCity}
              onChange={(e) => update({ professionalCity: e.target.value })}
              placeholder="Mumbai"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>
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

export default Step4ProfessionalProfile;