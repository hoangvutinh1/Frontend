import React from "react";
import './Toolbar.css';
function Toolbar(props){
    
    return (
        <div className='toolbar '>
            <div className="row">
                <div className="col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row">
                        <div className="col">

                            <i className="bi bi-clock-history icon" ></i>
                            <div><label>Lịch sử</label></div>
                        </div>
                        <div  className="col">
                            <i className="bi bi-star icon" ></i>
                            <div><label>Đã lưu</label></div>
                        </div>
                        <div  className="col">
                            <i className="bi bi-question-circle icon" ></i>
                            <div><label>Liên hệ</label></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
            </div>
        </div>
    )
}

export default Toolbar;