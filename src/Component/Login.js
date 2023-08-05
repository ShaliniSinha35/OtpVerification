import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firebase } from "../firebase";
import { RecaptchaVerifier } from "firebase/auth";
import OtpInput from "react-otp-input";
import "./Otp.css";

export default function Login() {
  const [phNumber, setNumber] = useState("");
const [final,setfinal]=useState("");
const [otp, setOtp] = useState("");
const [user, setUser] = useState([]);
  const navigate = useNavigate();


  const handleClick = async (e) => {
    // if (phNumber === "" || phNumber.length < 10) return;
    e.preventDefault();

    let verify = await new firebase.auth.RecaptchaVerifier("recaptcha-container");
    const res = await auth
      .signInWithPhoneNumber(`+91${phNumber}`, verify)
      .then((result) => {
        console.log(result)
        setfinal(result);
        localStorage.setItem("otp",JSON.stringify(result))
        alert("Otp sent");
    
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
   // Validate OTP
   const ValidateOtp = () => {
    if (otp === null || final === null)
        return;
    final.confirm(otp).then((result) => {
        navigate("/")
    }).catch((err) => {
        alert("Wrong code");
    })
}

  return (
    <>
    {final!==""?<>
    <div className="otp-container">
      <OtpInput
        inputStyle={{
          width: "3rem",
          height: "3rem",
          margin: "20px 1rem",
          fontSize: "2rem",
          borderRadius: 4,
          border: "2px solid rgba(0,0,0,0.3)",
          placeholder: "0",
        }}
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <button
        type="submit"
        onClick={ValidateOtp}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 verify-btn"
      >
        Verify Otp
      </button>
    </div>
    
    </>:<> <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  value={phNumber}
                  placeholder="Enter your mobile number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  type="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div id="recaptcha-container" style={{ marginTop: "2rem" }}></div>
            <div>
              <button
                type="submit"
                onClick={handleClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Otp
              </button>
            </div>
          </form>
        </div>
      </div>
</>}
         </>
  );
}
