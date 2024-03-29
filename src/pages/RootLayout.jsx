import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../shared/UIElements/mainNavigation/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
