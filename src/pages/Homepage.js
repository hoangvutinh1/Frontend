import React, { Fragment } from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Toolbar from "../components/Toolbar/Toolbar";
function Homepage() {
  /*  const hobbyList=useSelector(state => state.hobby.list)
    const activeId=useSelector(state => state.hobby.activeId)
    const handleAddHobbyClick=()=>{
        //Random a hobby object:id +title
        const newId=randomNumber()
        const newHobby={
            //id:casual.uuid,
            //title:casual.title
            id:newId,
            title:` Hobby ${newId} `
        }

        //Dispatch action to add a new hobby to redux store
        dispatch(addNewHobby(newHobby))
    }
    const handleHobbyClick=(hobby)=>{
        const action=setActiveHobby(hobby)
        dispatch(action)
    } */

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container-fluid ">
        <Main></Main>
        <Toolbar></Toolbar>
      </div>
    </Fragment>
  );
}

export default Homepage;
