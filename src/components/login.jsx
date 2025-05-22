import { useState } from "react";
import "../CSS/login.css";
import Navbar from './navbar';
import Navbar2 from './navbar2';
import Ayur from "../assets/logp.jpg";
import { Link } from "react-router";
import MainNav from "./mainnav";
import Footer from "./Footer";
import Sidebar1 from "./Home/sidebar1";
import Sidebar from "./Home/sidebar";
export default function Login(){
        const [isSidebarOpen, setSidebarOpen] = useState(false);
        const handleOpenSidebar = () => setSidebarOpen(true);
        const handleCloseSidebar = () => setSidebarOpen(false);
    return(
        <>
            {/* <Sidebar1></Sidebar1>
            <Sidebar></Sidebar> */}
            {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
            <Sidebar onOpenSidebar={handleOpenSidebar} />
            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <MainNav></MainNav>
            <div className="log">
                    <div className="imgsec">
                        <img src={Ayur} alt="Yajveer" />
                    </div>
                    <div className="logform ">
                        <div className="mainlog">
                            <div className="wel">
                                <p className="logn">Login</p>
                                <p>Welcome to Yajveer!</p>
                                <p> Please Login to your account</p>
                            </div>
                            <div className="field">
                                <form action="" className="logf">
                                    <div className="usn">
                                            <label htmlFor="userName">User Name : </label>
                                     <input type="text"id="userName" name="userName" placeholder="Enter Your UserName"/>
                                    </div>
                                    <div className="usp">
                                             <label htmlFor="password">Password : </label>
                                     <input type="password" id="password" name="password" placeholder="Enter Your Password"></input>
                                    </div>
                                    <p>Forgot Your Password</p>
                                    <button>Login</button>
                                </form>
                                
                                <div className="newus">
                                    <p className="ne">New User ? </p>
                                    <Link to='/signUp'>
                                    <p className="ne1">SignUp</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer></Footer>
        </>
    )
};