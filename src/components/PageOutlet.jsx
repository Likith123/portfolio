import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function PageOutlet() {
  return (
    <>
      <Navbar />
      <main className="bg-primary-100 px-32">
        <Outlet />
      </main>
    </>
  );
}

export default PageOutlet;
