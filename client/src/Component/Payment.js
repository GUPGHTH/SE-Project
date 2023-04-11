import * as React from "react";
import Axios from "axios";
import "../Styles/Payment.css";
export default function Payment() {
  return (
    <body className="Payment">
        <div className="Payment-box">
      <div className="Payment-container">
        <div className="QR-code-payment">
          <img
            src="https://drive.google.com/uc?export=view&id=12rY9SoI4CCH3PN4JDaG4EMPy-j6icIs7"
            alt=""
          ></img>
        </div>

        <div className="payment-detali">
          <p>ราคาสุทธิ 100 THB</p>
        </div>

        <div className="up-img">
          <br></br>
          <p>แนบสลิปชำระเงิน</p>
          <from>
            <input className="myFile" type="file" id="myFile" name="filename" />
            <input  className="button-28" type="submit"></input>
            
          </from>
        </div>
      </div>

      <div class="form_des_info">

        <div class="topic_dse_info">ที่อยู่</div>
        <div className="text">ชื่อ : </div>
        <input type="text" placeholder="ชื่อ" />
        <div className="text">นามสกุล : </div>
        <input type="text" placeholder="นามสกุล" />
        <div className="text">เบอร์มือถือ : </div>
        <input type="text" placeholder="เบอร์มือถือ" />
        <div className="password">ที่อยู่ : </div>
        <input type="text" placeholder="ที่อยู่" />
        <div className="paymentButton">
            <button className="button-28">ยืนยันข้อมูล</button>
        </div>
        
          
          
      </div>
    </div>
    </body>
  );
}
