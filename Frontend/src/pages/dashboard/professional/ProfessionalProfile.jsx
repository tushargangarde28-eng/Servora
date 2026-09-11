function ProfessionalProfile() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Profile</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your public profile and preferences</p>
      </div>

      {/* Profile card */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">

        {/* Avatar + basic */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-2xl font-bold text-white">
            SP
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Suresh Patil</p>
            <p className="text-sm text-slate-400">AC Technician</p>
            <p className="mt-1 text-xs text-slate-500">suresh@example.com</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-300">
              Full name
            </label>
            <input
              id="fullName"
              defaultValue="Suresh Patil"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
              Phone
            </label>
            <input
              id="phone"
              defaultValue="+91 98765 11111"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>

          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-300">
              Professional title
            </label>
            <input
              id="title"
              defaultValue="AC Technician"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="bio" className="mb-2 block text-sm font-medium text-slate-300">
              Short bio
            </label>
            <textarea
              id="bio"
              rows={3}
              defaultValue="Certified AC technician with 8+ years of experience in installation, repair, and maintenance."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10"
            />
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

      {/* Availability */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
        <h2 className="text-base font-semibold text-white">Availability</h2>
        <p className="mt-1 text-xs text-slate-500">Let the shop know when you're available for jobs</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">Available for jobs</p>
              <p className="text-xs text-slate-500">Turn off if you're on break or vacation</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-white/10 transition peer-checked:bg-cyan-500 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">Accept new shop requests</p>
              <p className="text-xs text-slate-500">Allow shops to send you invitations</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-white/10 transition peer-checked:bg-cyan-500 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalProfile;