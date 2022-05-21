import React, { useRef } from "react";
import "./Header.css";
const Header = () => {
  const close = useRef(null);

  const handleClose = () => {
    close.current.click();
  };
  return (
    <>
      <div className="header" id="header">
        <div className="top_nav"></div>
        <div className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 logo_wrap">
                <div className="logo">
                  <a href="#/">
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
                <div className="hamburger">
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    <i className="fas fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nav_wrapper">
                  <ul className="nav_bar">
                    <li>
                      <a href="#/" className="active link" onClick={{}}>
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="#/" className="link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#/" className="link">
                        Services
                      </a>
                    </li>

                    <li>
                      <a href="#/" className="link">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#/" className="link">
                        Contact
                      </a>
                    </li>
                    <li>
                      <button >
                        Login
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="canvas_wrap">
                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      ref={close}
                      style={{ display: "none" }}
                    ></button>
                    <h2>MENU</h2>
                    <ul className="nav_bar">
                      <li>
                        <a href="#" className="active link">
                          HOME
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link">
                          OUR PRODUCT
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link">
                          ABOUT US
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link">
                          CONTACT US
                        </a>
                      </li>
                    </ul>
                    <div
                      className="offcanvas-backdrop fade show"
                      style={{ opacity: "0", position: "fixed", zIndex: "-1" }}
                      onClick={handleClose}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
