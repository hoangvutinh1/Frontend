import React, { Fragment } from "react";

import './Homepage.css';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Toolbar from "../components/Toolbar/Toolbar";
function Homepage(props){
   
    return (
        <Fragment>
            <Navbar></Navbar>
            <div className='container-fluid '>
                <Main></Main>
                <Toolbar></Toolbar>
            </div>
        </Fragment>
    )
}

export default Homepage;
