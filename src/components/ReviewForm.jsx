import { useState  } from "react";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import MainNav from "./mainnav";
import Footer from "./Footer";
import "../CSS/ReviewForm.css";
import Logo from "../assets/Yajveer.png";
import Sidebar from './Home/sidebar';
import Sidebar1 from './Home/sidebar1';
export default function ReviewForm() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  return (
    <>
     {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
     <Sidebar onOpenSidebar={handleOpenSidebar} />
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <MainNav></MainNav>

      <section className="review-section">
        <div className="review-box">
          <div className="review-left">
            <img src={Logo} alt="Ayurvedic Review" />
          </div>
          <div className="review-right">
            <h2>Share Your Experience</h2>
            <form className="review-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group image-upload-section">
                <label className="image-upload-label">Upload Your Photo</label>
                <div className="image-upload-container">
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleImageChange(e)}
                    required
                  />
                  <label htmlFor="imageInput" className="browse-button">
                    Browse
                  </label>
                  <span className="file-name">
                    {selectedFileName || "No file chosen"}
                  </span>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Write your review..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
