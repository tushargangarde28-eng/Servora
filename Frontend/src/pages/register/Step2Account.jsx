function Step2Account({ data, update, next, back }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /api/auth/register  { fullName, email, password }
    // Backend creates row in `users` (account_status = 'PENDING',
    // email_verified = false), sends verification email.
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
          Your account details
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          We'll send a verification link to your email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-300">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={data.fullName}
            onChange={(e) => update({ fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={data.password}
            onChange={(e) => update({ password: e.target.value })}
            placeholder="At least 8 characters"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30 focus:bg-white/10"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            Use 8+ characters with a mix of letters, numbers, and symbols.
          </p>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
        >
          Continue
        </button>
      </form>
    </>
  );
}

export default Step2Account;