import { Plus, Mail, Phone, MoreVertical } from "lucide-react";

function BusinessTeam() {
  const team = [
    { id: 1, name: "Suresh Patil", role: "AC Technician", email: "suresh@acme.com", phone: "+91 98765 11111", jobs: 24, rating: 4.8, status: "Active" },
    { id: 2, name: "Meena Kulkarni", role: "Housekeeping", email: "meena@acme.com", phone: "+91 98765 22222", jobs: 41, rating: 4.9, status: "Active" },
    { id: 3, name: "Ravi Kumar", role: "Plumber", email: "ravi@acme.com", phone: "+91 98765 33333", jobs: 18, rating: 4.6, status: "On Leave" },
    { id: 4, name: "Anita Sharma", role: "Beautician", email: "anita@acme.com", phone: "+91 98765 44444", jobs: 33, rating: 4.7, status: "Active" },
    { id: 5, name: "Deepak Rao", role: "Electrician", email: "deepak@acme.com", phone: "+91 98765 55555", jobs: 12, rating: 4.5, status: "Active" },
    { id: 6, name: "Kavita Mehta", role: "Yoga Instructor", email: "kavita@acme.com", phone: "+91 98765 66666", jobs: 27, rating: 4.9, status: "Active" },
  ];

  const statusColor = {
    Active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "On Leave": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Inactive: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  };

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Team</h1>
          <p className="mt-1 text-sm text-slate-400">Manage professionals working with your business</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div
            key={m.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-sm font-bold text-white">
                  {m.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{m.name}</p>
                  <p className="text-xs text-slate-400">{m.role}</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-lg p-1.5 text-slate-500 transition hover:bg-white/5 hover:text-white"
                aria-label="More"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-3.5 w-3.5" />
                <span className="truncate">{m.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="h-3.5 w-3.5" />
                <span>{m.phone}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex gap-4 text-xs">
                <div>
                  <div className="font-semibold text-white">{m.jobs}</div>
                  <div className="text-slate-500">Jobs</div>
                </div>
                <div>
                  <div className="font-semibold text-white">★ {m.rating}</div>
                  <div className="text-slate-500">Rating</div>
                </div>
              </div>
              <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusColor[m.status]}`}>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessTeam;