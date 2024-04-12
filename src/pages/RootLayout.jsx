import { Outlet } from "react-router-dom";
import MainNavigation from "../shared/UIElements/mainNavigation/MainNavigation";
import Footer from "../shared/UIElements/footer/Footer";

function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "125vh",
      }}
    >
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
