import { useState } from "react";
import { Search, Store, Send, X, CheckCircle2 } from "lucide-react";

function ProfessionalShops() {
  // Shops the professional can browse and request
  const [shops, setShops] = useState([
    { id: 1, name: "Acme Home Services", category: "Home Services", city: "Mumbai", members: 8, rating: 4.7, status: "none" },
    { id: 2, name: "CoolAir Solutions", category: "AC & Refrigeration", city: "Mumbai", members: 12, rating: 4.8, status: "pending" },
    { id: 3, name: "ShineClean Pro", category: "Cleaning Services", city: "Pune", members: 15, rating: 4.6, status: "none" },
    { id: 4, name: "FixIt Fast", category: "Home Services", city: "Mumbai", members: 6, rating: 4.5, status: "none" },
    { id: 5, name: "Glow Salon Group", category: "Beauty & Wellness", city: "Delhi", members: 20, rating: 4.9, status: "linked" },
    { id: 6, name: "SwiftPlumb", category: "Plumbing", city: "Mumbai", members: 4, rating: 4.4, status: "none" },
  ]);

  const [search, setSearch] = useState("");

  const sendRequest = (shopId) => {
    setShops((prev) =>
      prev.map((s) => (s.id === shopId ? { ...s, status: "pending" } : s))
    );
    // TODO: POST /api/professional/join-requests { shopId }
  };

  const removeRequest = (shopId) => {
    setShops((prev) =>
      prev.map((s) => (s.id === shopId ? { ...s, status: "none" } : s))
    );
    // TODO: DELETE /api/professional/join-requests/{shopId}
  };

  const unlink = (shopId) => {
    setShops((prev) =>
      prev.map((s) => (s.id === shopId ? { ...s, status: "none" } : s))
    );
    // TODO: DELETE /api/professional/link/{shopId}
  };

  const filtered = shops.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase()) ||
    s.city.toLowerCase().includes(search.toLowerCase())
  );

  // Any shop that isn't already linked
  const linkedShop = shops.find((s) => s.status === "linked");

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Shops</h1>
        <p className="mt-1 text-sm text-slate-400">
          Send a join request to a shop to start receiving jobs, or remove your request anytime.
        </p>
      </div>

      {/* Currently linked */}
      {linkedShop && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Currently Linked
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">{linkedShop.name}</p>
                <p className="text-xs text-slate-400">
                  {linkedShop.category} • {linkedShop.city}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => unlink(linkedShop.id)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
            >
              <X className="h-4 w-4" />
              Leave Shop
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search shops by name, category, or city..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10"
        />
      </div>

      {/* Shops grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((shop) => (
          <div
            key={shop.id}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Store className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{shop.name}</p>
                <p className="truncate text-xs text-slate-400">{shop.category}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4 text-xs">
              <div>
                <div className="font-semibold text-white">{shop.members}</div>
                <div className="text-slate-500">Members</div>
              </div>
              <div>
                <div className="font-semibold text-white">★ {shop.rating}</div>
                <div className="text-slate-500">Rating</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-slate-400">{shop.city}</div>
              </div>
            </div>

            {/* Action — depends on status */}
            <div className="mt-4">
              {shop.status === "none" && (
                <button
                  type="button"
                  onClick={() => sendRequest(shop.id)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
                >
                  <Send className="h-4 w-4" />
                  Send Join Request
                </button>
              )}

              {shop.status === "pending" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Request Pending
                  </div>
                  <button
                    type="button"
                    onClick={() => removeRequest(shop.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                  >
                    <X className="h-4 w-4" />
                    Remove Request
                  </button>
                </div>
              )}

              {shop.status === "linked" && (
                <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Currently Linked
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
          <p className="text-sm text-slate-400">No shops match your search.</p>
        </div>
      )}
    </div>
  );
}

export default ProfessionalShops;