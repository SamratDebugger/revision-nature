import { Outlet } from "react-router";
import Footer from "../components/ui/Footer";
import Nav from "../components/ui/Nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
