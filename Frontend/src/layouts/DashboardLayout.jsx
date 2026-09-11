import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Bell, Search } from "lucide-react";

function DashboardLayout({ role = "business", menu = [], user = {} }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear auth tokens
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar (desktop) */}
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <SidebarContent menu={menu} role={role} onLogout={handleLogout} />
        </aside>

        {/* Sidebar (mobile drawer) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="relative flex h-full w-72 flex-col border-r border-white/10 bg-slate-950">
              <SidebarContent
                menu={menu}
                role={role}
                onLogout={handleLogout}
                onNavigate={() => setSidebarOpen(false)}
              />
            </aside>
          </div>
        )}

        {/* Main content */}
        <div className="flex min-h-screen w-full flex-col lg:pl-64">

          {/* Topbar */}
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6">

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Search */}
              <div className="relative hidden flex-1 max-w-md sm:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10"
                />
              </div>

              <div className="ml-auto flex items-center gap-2">

                {/* Notifications */}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </button>

                {/* User chip */}
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-xs font-bold text-white">
                    {(user.name || "U").slice(0, 1).toUpperCase()}
                  </div>
                  <div className="hidden text-left sm:block">
                    <p className="text-xs font-semibold leading-tight text-white">
                      {user.name || "User"}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------- Sidebar inner content ---------- */
function SidebarContent({ menu, role, onLogout, onNavigate }) {
  return (
    <>
      {/* Brand */}
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={onNavigate}>
          <img
            src="/Servora_logo2.png"
            alt="SERVORA"
            className="h-8 w-auto object-contain"
          />
          <span className="text-base font-bold tracking-tight text-white">
            SERVORA
          </span>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </>
  );
}

export default DashboardLayout;