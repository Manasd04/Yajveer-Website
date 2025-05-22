import { useState } from "react";
import { useParams } from "react-router";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import MainNav from "./mainnav";
import Sidebar from "./Home/sidebar";
import Sidebar1 from "./Home/sidebar1";
import Footer from './Footer';
import "../CSS/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);
  return (
    <>
      {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
      <Sidebar onOpenSidebar={handleOpenSidebar} />
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <MainNav></MainNav>
      <h1>{id}</h1>
      <Footer></Footer>
    </>
  );
}
