import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Checkout() {
    const location = useLocation();
    const data = location.state;
    console.log(data);
  return (
    <div> 
        <br></br>
        <div>
            <center>
            <img src='https://th.bing.com/th/id/OIP.VmqgVKpamj78P5DU30JbYAHaG1?pid=ImgDet&w=761&h=703&rs=1' height={200} width={200}></img>
            </center>
        <h1 className="text-center">Order Placed Successfully</h1>
        </div>
        <div className='card mx-auto' style={{width: '400px'}}>
            <div id="checkoutCard">
                <h2 className="text-center">Order summary</h2>
                <h4 className="text-center">Product: {data.prodName}</h4>
                <h4 className="text-center">Quantity: {data.quantityTotal}</h4>
                <h4 className="text-center">Total cost: ${data.totalCost}</h4>
            </div> 
        </div>
        <div>
            <h1 className="text-center">Thank You for Ordering</h1>
        </div>
    </div>
  )
}
