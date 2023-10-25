import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className=" max-w-6xl mx-auto font-poppins dark:bg-[#0F172A]">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
