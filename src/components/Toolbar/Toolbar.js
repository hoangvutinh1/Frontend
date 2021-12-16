import React from "react";
import './Toolbar.css';

import { useDispatch } from "react-redux";
import { loadHistory } from "../../actions/history";
function Toolbar(props){
    const dispatch=useDispatch()
    const onHandleClick=(e)=>{
        dispatch(loadHistory(true))
    }
    return (
        <div className='toolbar '>
            <div className="row">
                <div className="col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6">
                    <div className="row">
                        <div className="col">

                            <i className="bi bi-clock-history icon" onClick={onHandleClick}></i>
                            <div><label className="size-18px">Lịch sử</label></div>
                        </div>
                    
                        <div  className="col">
                            <i className="bi bi-question-circle icon" ></i>
                            <div><label className="size-18px">Liên hệ</label></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
            </div>
        </div>
    )
}

export default Toolbar;