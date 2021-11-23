import React from "react";
import "./Main.css";
import { useState } from "react";
import axios from "axios";
function Main() {
  const [textHue, updateTextHue] = useState("");
  const [textTiengViet, updateTextTiengViet] = useState("");
  const onHangdlechange = e => {
    const value = e.target.value;
    updateTextHue(value);
  };
  const onHangdleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/translate`, { TranslateSentence: textHue })
      .then(response => {
        updateTextTiengViet(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="main">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label>Phương ngữ Huế</label>

          <form>
            <div className="form-group">
              <textarea
                className="form-control border-none"
                placeholder="Nhập câu cần dịch"
                onChange={onHangdlechange}
              ></textarea>
            </div>
            <div>
              <i class="bi bi-mic"></i>
              <i className="margin-right">
                <i>{textHue.length}/5000</i>
                <i class="bi bi-pencil-square"></i>
              </i>
            </div>
            <button className="form-control" onClick={onHangdleSubmit}>
              Dịch
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6	col-lg-6 col-xl-6">
          <label>Tiếng Việt phổ thông</label>
          <form>
            <div className="form-group">
              <textarea className="form-control" value={textTiengViet} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
