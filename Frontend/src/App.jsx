import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserSquare2,
  FileText,
  Briefcase,
  Settings,
  Wallet,
  Store,
  UserCircle,
} from "lucide-react";

// Public site
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";
import RegisterFlow from "./pages/register/RegisterFlow";
import Services from "./pages/services/Services";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Pricing from "./pages/pricing/Pricing";

// Shared layout
import DashboardLayout from "./layouts/DashboardLayout";

// Business Owner dashboard
import BusinessDashboard from "./pages/dashboard/business/BusinessDashboard";
import BusinessAppointments from "./pages/dashboard/business/BusinessAppointments";
import BusinessTeam from "./pages/dashboard/business/BusinessTeam";
import BusinessCustomers from "./pages/dashboard/business/BusinessCustomers";
import BusinessInvoices from "./pages/dashboard/business/BusinessInvoices";
import BusinessServices from "./pages/dashboard/business/BusinessServices";
import BusinessSettings from "./pages/dashboard/business/BusinessSettings";

// Service Professional dashboard
import ProfessionalDashboard from "./pages/dashboard/professional/ProfessionalDashboard";
import ProfessionalJobs from "./pages/dashboard/professional/ProfessionalJobs";
import ProfessionalEarnings from "./pages/dashboard/professional/ProfessionalEarnings";
import ProfessionalShops from "./pages/dashboard/professional/ProfessionalShops";
import ProfessionalProfile from "./pages/dashboard/professional/ProfessionalProfile";

/* ---------- Menu definitions ---------- */

const businessMenu = [
  { path: "/dashboard/business", label: "Overview", icon: LayoutDashboard, end: true },
  { path: "/dashboard/business/appointments", label: "Appointments", icon: Calendar, badge: "12" },
  { path: "/dashboard/business/team", label: "Team", icon: Users },
  { path: "/dashboard/business/customers", label: "Customers", icon: UserSquare2 },
  { path: "/dashboard/business/services", label: "Services", icon: Briefcase },
  { path: "/dashboard/business/invoices", label: "Invoices", icon: FileText },
  { path: "/dashboard/business/settings", label: "Settings", icon: Settings },
];

const professionalMenu = [
  { path: "/dashboard/professional", label: "Overview", icon: LayoutDashboard, end: true },
  { path: "/dashboard/professional/jobs", label: "My Jobs", icon: Calendar, badge: "3" },
  { path: "/dashboard/professional/earnings", label: "Earnings", icon: Wallet },
  { path: "/dashboard/professional/shops", label: "Shops", icon: Store },
  { path: "/dashboard/professional/profile", label: "Profile", icon: UserCircle },
];

/* ---------- App ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- Public site ---------- */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/services" element={<><Navbar /><Services /></>} />
        <Route path="/how-it-works" element={<><Navbar /><HowItWorks /></>} />
        <Route path="/pricing" element={<><Navbar /><Pricing /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterFlow />} />

        {/* ---------- Business Owner Dashboard ---------- */}
        <Route
          path="/dashboard/business"
          element={
            <DashboardLayout
              role="business"
              menu={businessMenu}
              user={{ name: "Amit Kumar" }}
            />
          }
        >
          <Route index element={<BusinessDashboard />} />
          <Route path="appointments" element={<BusinessAppointments />} />
          <Route path="team" element={<BusinessTeam />} />
          <Route path="customers" element={<BusinessCustomers />} />
          <Route path="services" element={<BusinessServices />} />
          <Route path="invoices" element={<BusinessInvoices />} />
          <Route path="settings" element={<BusinessSettings />} />
        </Route>

        {/* ---------- Service Professional Dashboard ---------- */}
        <Route
          path="/dashboard/professional"
          element={
            <DashboardLayout
              role="professional"
              menu={professionalMenu}
              user={{ name: "Suresh Patil" }}
            />
          }
        >
          <Route index element={<ProfessionalDashboard />} />
          <Route path="jobs" element={<ProfessionalJobs />} />
          <Route path="earnings" element={<ProfessionalEarnings />} />
          <Route path="shops" element={<ProfessionalShops />} />
          <Route path="profile" element={<ProfessionalProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}