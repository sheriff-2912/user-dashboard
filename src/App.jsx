import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Custom animated SVG icons (use currentColor so tailwind text colors control them)
  const DashboardIcon = ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 transform ${className} group-hover:scale-110 group-hover:-rotate-6`}
    >
      <rect x="3" y="11" width="4" height="8" rx="1" />
      <rect x="10" y="7" width="4" height="12" rx="1" />
      <rect x="17" y="3" width="4" height="16" rx="1" />
    </svg>
  );

  const UsersIcon = ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 transform ${className} group-hover:scale-110 group-hover:translate-y-[-2px]`}
    >
      <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z" />
      <path d="M6 11c1.657 0 3-1.567 3-3.5S7.657 4 6 4 3 5.567 3 7.5 4.343 11 6 11z" />
      <path d="M3 20c0-2.5 2.5-4 6-4s6 1.5 6 4" />
    </svg>
  );

  const SalesIcon = ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 transform ${className} group-hover:scale-105 group-hover:rotate-3`}
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 6h2" />
    </svg>
  );

  const SettingsIcon = ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 transform ${className} group-hover:scale-110 group-hover:rotate-12`}
    >
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09c0-.67-.39-1.27-1-1.51a1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 0 1 2.28 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.67 0 1.27-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82L4.31 3.7A2 2 0 0 1 7.14.87l.06.06a1.65 1.65 0 0 0 1.82.33H9.1c.67 0 1.27.39 1.51 1a1.65 1.65 0 0 0 1-.33h.06A2 2 0 0 1 16.9 4.31l-.06.06a1.65 1.65 0 0 0-.33 1.82c.24.61.84 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.67 0-1.27.39-1.51 1z" />
    </svg>
  );

  const sidebarItems = [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Users", icon: UsersIcon },
    { name: "Sales", icon: SalesIcon },
    { name: "Settings", icon: SettingsIcon },
  ];

  const stats = [
    { title: "Total Users", value: "1,245", change: "+12%" },
    { title: "Sales", value: "$27,840", change: "+8%" },
    { title: "Performance", value: "89%", change: "-3%" },
  ];

  const tableData = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active", lastLogin: "2025-08-15" },
    { id: 2, name: "Michael Smith", role: "Editor", status: "Inactive", lastLogin: "2025-08-12" },
    { id: 3, name: "Sarah Lee", role: "User", status: "Active", lastLogin: "2025-08-10" },
    { id: 4, name: "David Kim", role: "User", status: "Pending", lastLogin: "2025-08-08" },
    { id: 5, name: "Sophia Brown", role: "Admin", status: "Active", lastLogin: "2025-08-05" },
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-gradient-to-b from-[#2b0000] to-[#1a0000] flex-col p-4">
        <h1 className="text-2xl font-bold mb-6 text-white">MyDashboard</h1>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`group flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors duration-200 transform ${
                  isActive
                    ? "bg-white text-black shadow-lg scale-100"
                    : "text-white hover:bg-gray-800 hover:scale-[1.01]"
                }`}
              >
                <Icon size={18} className={`${isActive ? "text-black" : "text-white"}`} />
                <span className="font-medium">{item.name}</span>
                <span
                  className={`ml-auto w-2 h-2 rounded-full transition-opacity duration-200 ${
                    isActive ? "bg-green-400 opacity-100" : "bg-transparent opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar (slide-over) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-[#2b0000] to-[#1a0000] p-4 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">MyDashboard</h2>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setMobileOpen(false);
                }}
                className={`group flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors duration-200 transform ${
                  isActive
                    ? "bg-white text-black shadow-lg scale-100"
                    : "text-white hover:bg-white/5 hover:scale-[1.01]"
                }`}
              >
                <Icon size={18} className={`${isActive ? "text-black" : "text-white"}`} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Overlay when mobile menu open */}
      {mobileOpen && (
        <button
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile / small screens */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="p-2 rounded-md hover:bg-white/10"
            >
              {/* simple hamburger */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">MyDashboard</h1>
          </div>
          <div className="text-sm text-gray-400">Signed in as <span className="text-white font-medium">Admin</span></div>
        </header>

        {/* Main content */}
        <main className="p-4 md:p-6 overflow-y-auto">
          {/* Stats: responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-[#1a1a1a] p-4 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01] duration-200"
              >
                <h2 className="text-sm text-gray-400">{stat.title}</h2>
                <p className="text-2xl font-bold">{stat.value}</p>
                <span
                  className={`text-sm ${
                    stat.change.startsWith("+") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            ))}
          </div>

          {/* Data Table / Mobile list */}
          <div className="bg-[#1a1a1a] p-4 md:p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">User Data</h2>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
                Showing {tableData.length} users
              </div>
            </div>

            {/* Mobile stacked cards */}
            <div className="sm:hidden space-y-3">
              {tableData.map((row) => (
                <div key={row.id} className="bg-[#121212] p-3 rounded-lg border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-400">ID #{row.id}</div>
                    <div className={`text-sm ${
                      row.status === "Active" ? "text-green-400" : row.status === "Inactive" ? "text-red-400" : "text-yellow-400"
                    }`}>{row.status}</div>
                  </div>
                  <div className="text-white font-medium">{row.name}</div>
                  <div className="text-sm text-gray-400">{row.role}</div>
                  <div className="text-xs text-gray-500 mt-2">Last login: {row.lastLogin}</div>
                </div>
              ))}
            </div>

            {/* Desktop / tablet table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-700 text-gray-400">
                    <th className="pb-2 pr-6">ID</th>
                    <th className="pb-2 pr-6">Name</th>
                    <th className="pb-2 pr-6">Role</th>
                    <th className="pb-2 pr-6">Status</th>
                    <th className="pb-2">Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-800 hover:bg-gray-900 transition-colors duration-150"
                    >
                      <td className="py-3 pr-6">{row.id}</td>
                      <td className="pr-6">{row.name}</td>
                      <td className="pr-6">{row.role}</td>
                      <td
                        className={`pr-6 ${
                          row.status === "Active"
                            ? "text-green-400"
                            : row.status === "Inactive"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {row.status}
                      </td>
                      <td>{row.lastLogin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
