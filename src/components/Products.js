import React, { useRef, useState,Link } from 'react'
import './customcss/style.css'
import Order from './Order';
import { useNavigate } from 'react-router-dom';
import Navbarrr from './Navbarrr';

export default function Products() {

    var prodName = useRef("");
    var quantityTotal = useRef(0);
    var quantityTotal1 = useRef(0);
    var quantityTotal2 = useRef(0);
    var quantityTotal3 = useRef(0);
    var quantityTotal4 = useRef(0);
    var quantityTotal5 = useRef(0);
    var quantityTotal6 = useRef(0);
   

    var navigate = useNavigate();

      const placeOrder3=(e)=>{
        e.preventDefault();
        prodName = 'Jet A';
        var totalCost = quantityTotal.current.value * 4684;
        
        navigate('/Order',{state: {prodName : 'Jet A',totalCost: totalCost,quantityTotal: quantityTotal.current.value}})
        console.log(quantityTotal.current);
    }
    const placeOrder4=(e)=>{
        e.preventDefault();
        prodName = 'Jet A1';
        var totalCost = quantityTotal1.current.value * 8723;
        
        navigate('/Order',{state: {prodName : 'Jet A1',totalCost: totalCost,quantityTotal: quantityTotal1.current.value}})
        console.log(quantityTotal1.current);
    }
    const placeOrder9=(e)=>{
        e.preventDefault();
        prodName = 'Jet B';
        var totalCost = quantityTotal2.current.value * 9273;
        var q=quantityTotal2.current.value;
        navigate('/Order',{state: {prodName : 'Jet B',totalCost: totalCost,quantityTotal: q}})
        console.log(quantityTotal2.current);
    }
    const placeOrder5=(e)=>{
        e.preventDefault();
        prodName = 'JP-1';
        var totalCost = quantityTotal3.current.value * 3762;
        var q=quantityTotal3.current.value;
        navigate('/Order',{state: {prodName : 'JP-1',totalCost: totalCost,quantityTotal: q}})
        console.log(quantityTotal3.current);
    }
    const placeOrder6=(e)=>{
        e.preventDefault();
        prodName = 'AvGas 100';
        var totalCost = quantityTotal4.current.value * 1657;
        var q=quantityTotal4.current.value;
        navigate('/Order',{state: {prodName : 'AvGas 100',totalCost: totalCost,quantityTotal: q}})
        console.log(quantityTotal4.current);
    }
    const placeOrder7=(e)=>{
        e.preventDefault();
        prodName = 'AvGas 100LL';
        var totalCost = quantityTotal5.current.value * 2167;
        var q=quantityTotal5.current.value;
        navigate('/Order',{state: {prodName : 'AvGas 100LL',totalCost: totalCost,quantityTotal: q}})
        console.log(quantityTotal5.current);
    }
    const placeOrder8=(e)=>{
        e.preventDefault();
        prodName = 'AvGas 82UL';
        var totalCost = quantityTotal6.current.value * 4831;
        var q=quantityTotal6.current.value;
        navigate('/Order',{state: {prodName : 'AvGas 82UL',totalCost: totalCost,quantityTotal: q}})
        console.log(quantityTotal6.current);
    }
   

    function toggle(elementId) {
        const element = document.getElementById(elementId);
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    function hide(id){
        const element = document.getElementById(id);
        element.style.display="none";
    }

    function show(id){
        const element = document.getElementById(id);
        element.style.display="block";
    }
    function firstToggle(){
        hide('toggler1'); hide('target2'); hide('target3');show('hidden1');show('backbtn');
    }
    function secondToggle() {
        hide('target1'); hide('toggler2'); hide('target3');show('hidden2');
    }
    function thirdToggle() {
        hide('target1'); hide('target2'); hide('toggler3');show('hidden3');
    }
    function backButton3() {
        show('target1');show('target2');show('toggler3');hide('hidden3');
    }
    function backButton1() {
        show('toggler1');show('target2');show('target3');hide('hidden1');
    }
    function backButton2() {
        show('target1');show('toggler2');show('target3');hide('hidden2');
    }
  return (
    <div>
        
    <div className="container">
        <div className="card-deck ">
            <div id="target1" className="card scale-100 hover:scale-105 ease-in duration-500" >
                <div id="toggler1" className="card-body text-center" onClick={firstToggle}>
                    <img src="https://tiimg.tistatic.com/fp/1/006/275/aviation-kerosene-colonial-grade-54-jet-fuel-russian-origin-342.jpg" height="600" width="400" />
                    <h5 className="card-title"><strong>Kerosene Based Fuels</strong></h5>
                    <p className="card-text">Kerosene-based fuel for airplanes is usually broken down into various types, according to physical qualities and certain specifications.</p>
                </div>
            </div>
            <div id="target2" className="card scale-100 hover:scale-105 ease-in duration-500">
                <div className="card-body text-center" id="toggler2" onClick={secondToggle}>
                    <img src="https://gosuperior.com/wp-content/uploads/2018/08/iStock-685478516.jpg" height="600" width="400"/>
                    <h5 className="card-title"><strong>Military Based Fuels</strong></h5>
                    <p className="card-text">We provide fuels for Military use</p>
                </div>
            </div>
            <div id="target3" className="card scale-100 hover:scale-105 ease-in duration-500" >
                <div className="card-body text-center" id="toggler3" onClick={thirdToggle}>
                    <img src="https://th.bing.com/th/id/R.b3b90b438f8b9ddd8b95d54a968ef372?rik=E1jLEKoyvZmcTQ&riu=http%3a%2f%2fblog.inf.ed.ac.uk%2fatate%2ffiles%2f2016%2f01%2favgas-fueldrums.jpg&ehk=g%2bKDaJGdgj6Qh81h33w8yaVt9urruaRlzyBnaJwSTK8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" height="600" width="400"/>
                    <h5 className="card-title"><strong>Avgas</strong></h5>
                    <p className="card-text">This is a very popular type of airplane fuel that is often used by small piston-powered aircraft. It is specifically used for tasks such as crop-dusting and for private flying, flying clubs, and even flight training.</p>
                </div>
            </div>
        </div>
    </div>


        <div className="container"  id="hidden1">
            <center>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body" >
                        <img src="https://static-cdn4.vigbo.tech/u50683/63077/blog/4769046/3834593/section/c1fd80d0802a521cdcd72a00b1818cd7.jpg" height="600" width="400"/>
                        <p>Jet A</p>
                        <p className="price"><strong>$4684.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder3}>
                        <input ref={quantityTotal} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder3}>Place Order</button></form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://c8.alamy.com/comp/B6BJWR/jet-a1-aviation-fuel-tank-farm-feed-pipe-B6BJWR.jpg" height="610" width="400"/>
                        <p id="imgsizer">Jet A1</p>
                        <p><strong>$8723.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder4}>
                        <input ref={quantityTotal1} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder4}>Place Order</button></form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://th.bing.com/th/id/OIP.p_MMU_ix2sAKPEJQImB5YAHaFU?pid=ImgDet&rs=1" height="600" width="400"/>
                        <p id="imgsizer2">Jet B</p>
                        <p><strong>$9273.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder9}>
                        <input ref={quantityTotal2} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder9}>Place Order</button></form>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" id="btn1" onClick={backButton1}>Back</button>
            </div>
            </center>
        </div>

        <div className="container"  id="hidden2" >
            <center>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body" >
                        <img src="https://i.ebayimg.com/images/g/lm4AAOSwWSlb9BTa/s-l300.jpg" height="250" width="200"/>
                        <p>JP-1</p>
                        <p><strong>$3762.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder5}>
                        <input ref={quantityTotal3} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder5}>Place Order</button></form>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" id="btn2" onClick={backButton2}>Back</button>
            </div>
            </center>
        </div>

        <div className="container"  id="hidden3" >
            <center>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body" >
                        <img src="https://www.airport-suppliers.com/wp-content/uploads/2020/12/TOTAL-Aviation-AvGas-1217721194.jpg" height="600" width="400"/>
                        <p>AvGas 100</p>
                        <p><strong>$1657.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder6}>
                        <input ref={quantityTotal4} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder6}>Place Order</button></form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://www.airport-suppliers.com/wp-content/uploads/2020/12/TOTAL-Aviation-AvGas-1217721194.jpg" height="600" width="400"/>
                        <p>AvGas 100LL</p>
                        <p><strong>$2167.00</strong></p>
                        <label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder7}>
                        <input ref={quantityTotal5} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder7}>Place Order</button></form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://www.airport-suppliers.com/wp-content/uploads/2020/12/TOTAL-Aviation-AvGas-1217721194.jpg" height="600" width="400"/>
                        <p>AvGas 82UL</p>
                        <p><strong>$4831.00</strong></p><label htmlFor="quantity">Quantity (in Ltr):</label>
                        <form onSubmit={placeOrder8}>
                        <input ref={quantityTotal6} type="text" id="quantity" name="quantity"/>
                        
                        <button id="btn4" onClick={placeOrder8}>Place Order</button></form>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" id="btn3" onClick={backButton3}>Back</button>
            </div>
            </center>
        </div>

    </div>
  
    
  )
}
