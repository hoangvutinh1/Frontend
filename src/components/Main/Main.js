import React from "react";
import './Main.css';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
function Main(props){
    const [textHue,updateTextHue]=useState('');
    const [textTiengViet,updateTextTiengViet]=useState('');
    const [isMobile, setIsMobile] = useState(false)
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
    const getFontSize = (textLength) => {
        let fontSize=0;
        if (isMobile==false){
            fontSize =  24;
        }
        else fontSize=18
        
        const countLine=[...textHue.split('\n')].length;
        textLength+=countLine*64;
        while (textLength>64 && fontSize >18 && isMobile==false)
            {   
                fontSize = fontSize - 2;
                textLength=textLength-64}
        return `${fontSize}px`
      }
    const getMinHeight = (textLength) => {
        let minHeight = 200;
        const countLine=[...textHue.split('\n')].length;
        textLength+=countLine*64;
        while (textLength>300 && minHeight <500)
            {   
                minHeight=minHeight+50;
                textLength=textLength-200}
        return `${minHeight}px`
      }
      
    const boxes = document.querySelectorAll('textarea');

    boxes.forEach(box => {
        box.style.fontSize = getFontSize(textHue.length);
        box.style.minHeight=getMinHeight(textHue.length);
      })
    return (
        <div className='main '>
            <div className="row">
               
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label>Phương ngữ Huế</label>
                    
                    <form>
                        <div className="form-group">
                        
                            <textarea className="form-control size-24px"  placeholder="Nhập câu cần dịch" onChange={onHandleChange}></textarea>
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
                            
                            <textarea className='background-white form-control' id="exampleInputEmail1" value={textTiengViet} readOnly="readonly"/>
                           
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;