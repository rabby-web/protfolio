import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto p-0 m-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
