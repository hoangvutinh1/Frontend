import React, { Fragment } from "react";
import './Navbar.css';
import { useState } from "react";
import { useEffect } from "react";
function Navbar(props){
    const onHangdlechange=()=>{
        toggleToolbar(!isToggle)
        console.log(isToggle)
    }
    const [isToggle,toggleToolbar]=useState(false);
    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 800) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })
    return (
        <Fragment>
        <div className='navbar alert alert-primary'>
            <label className="bi-list navbar-icon " data-toggle="dropdown"  onClick={onHangdlechange}>
                {!isMobile && <label className="padding-10">Dịch phương ngữ Huế sang tiếng Việt phổ thông</label>} 
            </label>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
        </div>
        
        </Fragment>
        
    )
}

export default Navbar;