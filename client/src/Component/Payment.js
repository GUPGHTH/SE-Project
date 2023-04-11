import Axios from "axios";
import '../Styles/Payment.css'
export default function Payment(){
    return(
        // https://drive.google.com/file/d/12rY9SoI4CCH3PN4JDaG4EMPy-j6icIs7/view?usp=share_link
            <div className='Payment-container'>

                <div className='QR-code-payment' >
                <img 
                    src="https://drive.google.com/uc?export=view&id=12rY9SoI4CCH3PN4JDaG4EMPy-j6icIs7"
                    alt=""
                    >
                </img>
                </div>

                <div className='payment-detali'>
                    <p>ราคาสุทธิ 100 THB</p>
                </div>
                <br />
                <div className='up-img'>
                    <from >
                        <input type="file" id="myFile" name="filename" />
                        <input type="submit"></input>
                    </from>
                </div>
            </div>
    )
}