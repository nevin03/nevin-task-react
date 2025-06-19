import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <div className="container my-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Layout;
