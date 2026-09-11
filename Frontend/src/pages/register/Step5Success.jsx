import { Link } from "react-router-dom";

function Step5Success({ data }) {
  const isBusiness = data.role === "BUSINESS_OWNER";

  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10">
        <svg className="h-8 w-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        You're all set!
      </h2>
      <p className="mt-3 text-sm text-slate-400">
        We sent a verification link to{" "}
        <span className="font-medium text-white">{data.email || "your email"}</span>.
        Please verify to activate your account.
      </p>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm">
        <p className="text-slate-400">
          <span className="text-slate-500">Role:</span>{" "}
          <span className="font-medium text-white">
            {isBusiness ? "Business Owner" : "Service Professional"}
          </span>
        </p>
        {isBusiness && data.businessName && (
          <p className="mt-2 text-slate-400">
            <span className="text-slate-500">Business:</span>{" "}
            <span className="font-medium text-white">{data.businessName}</span>
          </p>
        )}
      </div>

      <Link
        to="/login"
        className="mt-8 inline-block w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default Step5Success;