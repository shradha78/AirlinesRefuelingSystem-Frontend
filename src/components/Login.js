import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {gql,useQuery} from '@apollo/client/';
const VERIFY_VENDOR = gql`

query verifyVendor($vendor : vendorInput!){

  vendorVerifyByPhoneNumberPassword(vendor : $vendor){

    vendor_Id,

    name

  }

}`

var id = 0 ;
function ValidateUser({ email, password }) {

  const { loading, error, data } = useQuery(VERIFY_VENDOR, {

    variables: {
  
      vendor: {
  
        phone_number : 111111111,
  
        password : password,
  
        email : email,
  
        name : "KingFisher"
  
      },
  
    },
  
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  if (data.vendorVerifyByPhoneNumberPassword) {

  //  console.log(VERIFY_VENDOR.vendor_Id);
  id = data.vendorVerifyByPhoneNumberPassword.vendor_Id;

  //   return<>

  //   {/* <h5> Vendor Id :

  //  {data.vendorVerifyByPhoneNumberPassword.vendor_Id}

  //       </h5>

  //   <h3 style={{ color: "green" }}>VALID USER</h3> */}

   

  //    </>;

  } 

}

export default function Login() {
 
        const navigate = useNavigate();
      function placeOrder(){
        navigate('/ForgetPass')
    
      }
      const [email, setEmail] = useState("");

      const [password, setPassword] = useState("");
    
     //The function that gets executed when the form is submitted
    
      const handleSubmitevents = (event) => {
    
        event.preventDefault();
    
        setEmail(document.getElementById("email").value);
    
        console.log(document.getElementById("email").value);
    
        setPassword(document.getElementById("password").value);
    
        console.log(document.getElementById("password").value);
        var cond = isEmptyValues() ? (
          <ValidateUser email = {email} password={password} />
          ) : null

        if(cond) {
        alert("Valid User")
        navigate('/Products')
        }else{
        alert("InValid User")
        navigate('/Login')
        }
      }
      
     //Checking if the element should be displayed or not,
    
      //we wont display it if the user hasnt inputted anything
    
      const isEmptyValues = () => {
    
        if (email === "" && password === "") {
    
          return false;
    
        } else return true;
    
      };
      
 
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="email" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Email ID</label>
                    </div>
                  </div>

            

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button id="login-btn" type="button" className="btn btn-primary btn-lg" onClick={handleSubmitevents} >Login</button>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    {/* <button type="button" className="btn btn-danger btn-sm" onClick={placeOrder}>Forgot password?</button> */}
                    <p>Forgot Password?<a href="/ForgetPass">Click here to update</a></p>
                  </div>
                  {isEmptyValues() ? (
                  <ValidateUser email = {email} password={password} />
                  ) : null}


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