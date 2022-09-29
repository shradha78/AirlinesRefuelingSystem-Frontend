import React, { useRef, useState,Link, Component } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import './customcss/style2.css'
import cardimg from './card_img.png'
import Products from './Products'

export default function Order(props) {
    const location = useLocation();
    const data = location.state;
    console.log(data);


    var navigate = useNavigate();

    const checkout=(e)=>{
      e.preventDefault();
      navigate('/checkout',{state: {prodName : data.prodName,totalCost: data.totalCost,quantityTotal: data.quantityTotal}})
  }




    return(
        
        <div className="animation-area">
            <br/><br/>
        <div className="card-order">
            <center>
                <h2>Billing details</h2>
                <img src="https://qph.fs.quoracdn.net/main-qimg-c262094463016706ba24a9f9e54011c5" id="image" height="200" width="300"/>
                <p><strong>Product: {data.prodName}</strong></p>
                <p><strong>Quantity: {data.quantityTotal} KL </strong></p>
                <p><strong>Total Price : ${data.totalCost}</strong></p>
            </center> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="container-order">
            <form action="">
        
                <div className="row">
        
                    <div className="col">
        
                        <h3 className="title">Billing Address</h3>
        
                        <div className="inputBox">
                            <span>Full Name :</span>
                            <input type="text" />
                        </div>
                        <div className="inputBox">
                            <span>Email :</span>
                            <input type="email" />
                        </div>
                        <div className="inputBox">
                            <span>Address :</span>
                            <input type="text" />
                        </div>
                        <div className="inputBox">
                            <span>City :</span>
                            <input type="text" />
                        </div>
        
                        <div className="flex">
                            <div className="inputBox">
                                <span>State :</span>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <span>Zip Code :</span>
                                <input type="text" />
                            </div>
                        </div>
        
                    </div>
        
                    <div className="col">
        
                        <h3 className="title">Payment</h3>
        
                        <div className="inputBox">
                            <span>Cards Accepted :</span>
                            <img src={cardimg} alt=""/>
                        </div>
                        <div className="inputBox">
                            <span>Name on Card :</span>
                            <input type="text" />
                        </div>
                        <div className="inputBox">
                            <span>Credit Card Number :</span>
                            <input type="number" />
                        </div>
                        <div className="inputBox">
                            <span>Exp Month :</span>
                            <input type="text" />
                        </div>
        
                        <div className="flex">
                            <div className="inputBox">
                                <span>Exp Year :</span>
                                <input type="number" />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" />
                            </div>
                        </div>
        
                    </div>
            
                </div>
        
                <input type="submit" value="Place Order" className="submit-btn" onClick={checkout}/>
        
            </form>
        
        </div>  
		{/* <ul className="box-area">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul> */}
	</div>
    )
}