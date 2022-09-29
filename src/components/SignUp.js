import React from 'react'
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function SignUp() {

  const navigate = useNavigate();
  useEffect(function(){
    const fonts=["cursive","sans-serif","serif","monospace"];
    let captchaValue="";
    function generateCaptcha(){
        let value= btoa(Math.random()*5);
        value = value.substring(0,5+ Math.random()*5);
        captchaValue = value;
    }

    function setCaptcha(){
        let html= captchaValue.split("").map((char) => {
            const rotate= Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span
            style=" 
            transform:rotate(${rotate}deg);
            font-family: ${fonts[font]}"
            >${char}</span>`;
        }).join("");
        var element= document.getElementById("preview");
   
        element.innerHTML= html;
    }

    function initCaptcha() {
        console.log(fonts.length)

        var btn=document.getElementById("captcha-refresh");
        btn.addEventListener("click",function(){
            generateCaptcha();
            setCaptcha();
            
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

    document.getElementById("login-btn").addEventListener("click",()=>{
        let inputCaptchaVal = document.getElementById("captcha-form").value;
        if(captchaValue==inputCaptchaVal){
            // alert("s");
            
            navigate('/')
        }
        
        // else{
        //     alert("retry")
        // }
        // if(inputCaptchaVal!==captchaValue){
        //      alert("Retry");
            
        // }
        // else{
        //     alert("Valid")
        // }

    })

})

  return (
    
    <div>
        <section className="vh-100" style={{backgroundcolor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderradius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name='name'/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Confirm Password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex  mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /><label className="form-check-label" htmlFor="form2Example3">
                      I agree to all the statements in <a href="#!">Terms and Conditions</a>
                    </label>
                  </div>
                  <div className="captcha">
         <label htmlFor="captcha-input">Enter captcha</label>
         <div className="preview" id="preview"></div>
         <div className="captcha-form">
            {/* <input type="text" id="captcha-form" placeholder="enter captcha"></input> */}
            <div className="form-outline flex-fill mb-0">
                      <input type="text" id="captcha-form" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Enter Captcha</label>
                    </div>
            <button className="captcha-refresh" id="captcha-refresh">
                 <i className="fa fa-refresh"></i> 
            </button>
        </div>
        </div> 
<br></br>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button id="login-btn"type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    
  )
}
