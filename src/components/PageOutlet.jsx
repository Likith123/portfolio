import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function PageOutlet() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PageOutlet;
