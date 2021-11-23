import React from "react";
import './Main.css';
import { useState } from "react";
import axios from 'axios';
function Main(props){
    const [textHue,updateTextHue]=useState('');
    const [textTiengViet,updateTextTiengViet]=useState('');
    //const [listData,updateListData]=useState('');
    const onHandleChange=(e)=>{
        const value=e.target.value;
        updateTextHue(value);
    }
    const configData=(response)=>{
        let data=response;
        
        data=data.replace(/_/g,' ');
        data=data.replace(/ \?/g,'?');
        data=data.replace(/ \./g,'.');
        data=data.replace(/ !/g,'!');
        data=data.replace(/ ,/g,',');
        return data
    }
    //const [listData,updateListData]=useState([]);
    async function FetchOneSentence(sentence){
        const response=await axios.post(`http://localhost:8000/translate`,{ TranslateSentence:sentence })
       
        return response.data
    }
    async function FetchData(textHueArray){
        let data=''
        for (let i = 0; i < textHueArray.length; i++){
            let sentence_i=(await FetchOneSentence(textHueArray[i]));

            data=data + configData(sentence_i) +'\n';
        }
        updateTextTiengViet(data)
      
        
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        let textHueArray=[...textHue.split('\n')];
        FetchData(textHueArray);
        
    }
    return (
        <div className='main'>
            <div className="row">
               
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label>Phương ngữ Huế</label>
                    
                    <form>
                        <div className="form-group">
                        
                            <textarea className="form-control border-none"  placeholder="Nhập câu cần dịch" onChange={onHandleChange}></textarea>
                        </div> 
                        <div >
                            <i className="bi bi-mic size-20px"></i>
                            <i className='margin-right size-20px'>
                                <i>{textHue.length}/5000</i>
                                <i className="bi bi-pencil-square"></i>
                            </i>
                        </div>
                        <button className='form-control' onClick={onHandleSubmit}>Dịch</button>
                    </form>
                    
                </div>
                <div className="col-sm-12 col-md-6	col-lg-6 col-xl-6">
                    <label>Tiếng Việt phổ thông</label>
                    <form>
                        <div className="form-group">
                            
                            <textarea className="background-white form-control " id="exampleInputEmail1" value={textTiengViet} readOnly="readonly"/>
                           
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;