import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ForgetPass() {
    const [email, setEmail] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword,setNewPassword]= useState("");
    const navigate = useNavigate();
    const isEmptyValues = () => {

   

        if (email === "" && oldpassword === ""&& newpassword === "") {

            return false;
        } else return true;
};

      
      const handleSubmitevents = (event) => {
    
        event.preventDefault();
    
        setEmail(document.getElementById("email").value);
    
        console.log(document.getElementById("email").value);
    
        setOldPassword(document.getElementById("oldp").value);
    
        console.log(document.getElementById("oldp").value);
     
        setNewPassword(document.getElementById("newp").value);
    
        console.log(document.getElementById("newp").value);
        var cond = isEmptyValues() ? (
          true
          ) : false

        if(cond) {
        alert("Valid User")
        navigate('/Login')
        }
      }


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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Change Password</p>

                <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Enter email</label>
                    </div>
                  </div>  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="oldp" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Enter New password</label>
                    </div>
                  </div>

            

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="newp" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Confirm password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmitevents}>Confirm</button>
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
