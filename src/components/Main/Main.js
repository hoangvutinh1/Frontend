import React from "react";
import "./Main.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { loadHistory } from "../../actions/history";
import { useDispatch } from "react-redux";
import { addVietHistory, addHueHistory } from "../../actions/history";
import { useSelector } from "react-redux";
import useRecorder from "../../hook/useRecorder";

function Main(props) {
  const dispatch = useDispatch();
  const historyViet = useSelector(state => state.history.textViet);
  const historyHue = useSelector(state => state.history.textHue);
  const isLoad = useSelector(state => state.history.isLoad);
  const [textHue, updateTextHue] = useState("");
  const [textTiengViet, updateTextTiengViet] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  const onHandleChange = e => {
    const value = e.target.value;
    updateTextHue(value);
  };
  const configData = response => {
    let data = response;
    data = data.replace(/_/g, " ");
    data = data.replace(/ \?/g, "?");
    data = data.replace(/ \./g, ".");
    data = data.replace(/ !/g, "!");
    data = data.replace(/ ,/g, ",");
    return data;
  };

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
  useEffect(() => {
    if (isLoad === true) {
      updateTextHue(historyHue.join("\n"));
      updateTextTiengViet(historyViet.join("\n"));
      dispatch(loadHistory(false));
    }
  }, [isLoad]);

  async function FetchOneSentence(sentence) {
    const response = await axios.post(`http://localhost:8000/translate`, {
      TranslateSentence: sentence,
    });
    return response.data;
  }

  async function FetchData(textHueArray) {
    let data = [];
    for (let i = 0; i < textHueArray.length; i++) {
      let sentence_i = await FetchOneSentence(textHueArray[i]);
      console.log(sentence_i);
      console.log(textHueArray[i]);
      data.push(configData(sentence_i));
    }
    updateTextTiengViet(data.join("\n"));
    dispatch(addHueHistory(textHueArray.join("\n")));
    dispatch(addVietHistory(data.join("\n")));
  }

  //Function to convert text to speech
  const convertTextToSpeech = async payload => {
    const url = "https://api.fpt.ai/hmi/tts/v5";
    const headers = {
      "api-key": "jDtFj4aDgHIYdyIJLNTspPVkiR8SiZxm",
      speed: "",
      voice: "lannhi",
    };

    const response = await axios.post(url, payload, { headers: headers });

    const audio = new Audio(response.data.async);

    audio.play();

    audio.remove();
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    let textHueArray = [...textHue.split("\n")];
    FetchData(textHueArray);
  };

  const getFontSize = textLength => {
    let fontSize = 0;
    if (isMobile === false) {
      fontSize = 24;
    } else fontSize = 18;

    const countLine = [...textHue.split("\n")].length;
    textLength += countLine * 64;
    while (textLength > 64 && fontSize > 18 && isMobile === false) {
      fontSize = fontSize - 2;
      textLength = textLength - 64;
    }
    return `${fontSize}px`;
  };
  const getMinHeight = textLength => {
    let minHeight = 200;
    const countLine = [...textHue.split("\n")].length;
    textLength += countLine * 64;
    while (textLength > 300 && minHeight < 500) {
      minHeight = minHeight + 50;
      textLength = textLength - 200;
    }
    return `${minHeight}px`;
  };

  const boxes = document.querySelectorAll("textarea");

  boxes.forEach(box => {
    box.style.fontSize = getFontSize(textHue.length);
    box.style.minHeight = getMinHeight(textHue.length);
  });
  return (
    <div className="main" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label>Phương ngữ Huế</label>

          <form style={{ width: "100%" }}>
            <div className="form-group">
              <textarea
                className="form-control size-24px"
                placeholder="Nhập câu cần dịch"
                value={textHue}
                onChange={onHandleChange}
              ></textarea>
            </div>
            <div>
              {/* <i class="bi bi-mic" style={{ fontSize: "30px" }}></i> */}
              <audio src={audioURL} controls />

              <button onClick={startRecording} disabled={isRecording}>
                start recording
              </button>

              <button onClick={stopRecording} disabled={!isRecording}>
                stop recording
              </button>

              <i className="margin-right size-20px">
                <i>{textHue.length}/5000</i>
                <i className="bi bi-pencil-square"></i>
              </i>
            </div>
            <button className="form-control" onClick={onHandleSubmit}>
              Dịch
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6	col-lg-6 col-xl-6">
          <label>Tiếng Việt phổ thông</label>
          <form>
            <div className="form-group">
              {textTiengViet !== "" ? (
                <textarea
                  className="background-white form-control"
                  id="exampleInputEmail1"
                  value={textTiengViet}
                  readOnly="readonly"
                />
              ) : (
                ""
              )}
              <i
                className="bi bi-speaker"
                onClick={() => convertTextToSpeech(textTiengViet)}
                style={{ fontSize: "30px" }}
              ></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
