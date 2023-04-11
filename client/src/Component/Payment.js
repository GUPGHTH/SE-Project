import * as React from "react";
import Axios from "axios";
import "../Styles/Payment.css";
import { FaArrowCircleDown } from "react-icons/fa";
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

            <div className="price">
              <p>ราคาสุทธิ 100 THB</p>
              <p className="text-red">
                *หมายเหตุกรุณาเลขออเดอร์ไปที่ส่งสลิปไปที่ <FaArrowCircleDown />{" "}
                :
              </p>

              <a href="https://line.me/R/ti/p/@030eokii">@030eokii</a>
            </div>
          </div>
        </div>

        <div class="form_des_info">
          <p>ที่อยู่</p>
          <br />
          <input type="text" placeholder="กรอกที่อยู่ของท่าน" />
          <button className="button-28">ยืนยันข้อมูล</button>
          
        </div>
      </div>
    </body>
  );
}
