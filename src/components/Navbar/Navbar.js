import React, { Fragment } from "react";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
function Navbar(props) {
  const onHangdlechange = () => {
    toggleToolbar(!isToggle);
    console.log(isToggle);
  };
  const [isToggle, toggleToolbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Fragment>
      <div className="navbar alert alert-primary">
        <label
          className="bi-list navbar-icon "
          data-toggle="dropdown"
          onClick={onHangdlechange}
        >
          {!isMobile && (
            <label className="padding-10">
              Chuyển phương ngữ Thừa Thiên Huế sang tiếng Việt phổ thông
            </label>
          )}
        </label>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Something else here</a> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
