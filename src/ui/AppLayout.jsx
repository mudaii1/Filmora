import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="relative overflow-y-hidden">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
