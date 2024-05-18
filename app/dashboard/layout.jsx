import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import NavbarTools from "../components/ui/NavbarTools";
import { DashboardProvider } from "@/context/dashboardContext";

export const metadata = {
  title: "Anlis SSTyMA Dashboard",
  description: "Salud y seguridad en el trabajo y medio ambiente",
};

export default async function DashboardLayout({ children }) {

  return (
    <DashboardProvider>
      <Navbar />
      <NavbarTools />
      <section className=" min-h-screen">
        {children}
      </section>
      <Footer />
    </DashboardProvider>

  );
}
