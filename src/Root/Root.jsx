import { Outlet } from "react-router-dom";
import Footer from "../Sheard/Footer/Footer";
import NavBar from "../Sheard/Navbar/NavBar";

const Root = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
