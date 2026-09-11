function Step3Role({ data, update, next, back }) {
  const roles = [
    {
      value: "BUSINESS_OWNER",
      icon: "🏢",
      title: "Business Owner",
      description: "I run a service business and manage a team of professionals.",
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      value: "PROFESSIONAL",
      icon: "🛠️",
      title: "Service Professional",
      description: "I provide services and want to manage my own jobs and clients.",
      accent: "from-violet-500/20 to-fuchsia-500/10",
    },
  ];

  const handleSelect = (role) => {
    update({ role });
  };

  const handleContinue = () => {
    if (!data.role) return;
    // TODO: POST /api/users/me/roles  { role: data.role }
    // Backend inserts into `user_roles` (role_id resolved from `roles.name`)
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
          How will you use SERVORA?
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Choose the role that fits you best
        </p>
      </div>

      <div className="space-y-3">
        {roles.map((r) => {
          const selected = data.role === r.value;
          return (
            <button
              key={r.value}
              type="button"
              onClick={() => handleSelect(r.value)}
              className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                selected
                  ? "border-blue-400/50 bg-blue-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <div
                className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${r.accent} blur-3xl transition-opacity ${
                  selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                  {r.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white">{r.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{r.description}</p>
                </div>
                <div
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                    selected ? "border-blue-400 bg-blue-400" : "border-white/20"
                  }`}
                >
                  {selected && (
                    <svg className="h-3 w-3 text-slate-950" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleContinue}
        disabled={!data.role}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-blue-500/20"
      >
        Continue
      </button>
    </>
  );
}

export default Step3Role;