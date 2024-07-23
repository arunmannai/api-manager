import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";



const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
};

export default Layout;