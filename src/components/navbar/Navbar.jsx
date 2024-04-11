import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div>
            <Link to="/" className="navbar-logo">
              Karo Abhayaas
            </Link>
          </div>

          <div className={`navbar-links ${isNavbarOpen ? "active" : ""}`}>
            <a className="join-button" href="/">JOIN US</a>
            <a href="/classes">Classes</a>
            <a href="/products">Products</a>
            <a href="/">About Us</a>

            <Link to="/dash">
              <div className="profile1">
                <VscAccount
                  style={{
                    fontSize: "2.5rem",
                    paddingTop: "13px",
                    color: "gray",
                  }}
                />
              </div>
            </Link>

            <div style={{ display: "flex" }}>
              <div
                style={{ color: "white", "fontSize": "1.3rem" }}
                className="/cart"
              >
                <MdAddShoppingCart style={{ color: "black" }} />
            
              </div>
            
            </div>
          </div>

          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
