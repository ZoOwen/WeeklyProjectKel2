import React from 'react'
import './components/Home.css'

function Footer() {
    return (
        <div>
        <div className="container">
           <div className="row">
           
           <div className="col-md-3">
           <p className="ftitle">BUYING GUIDE</p>
            <ul>
            <li className="lst">Dresses</li>
            <li  className="lst">Tops</li>
            <li  className="lst">Skirts</li>
            <li  className="lst">Sale</li>
            </ul>
           </div>
           <div className="col-md-3">
           <p className="ftitle">OURSTORE</p>
           <ul>
            <li className="lst">About</li>
            <li  className="lst">Our Services</li>
            <li  className="lst">FAQ</li>
            <li  className="lst">Portpolio</li>
            </ul>
           </div>
           <div className="col-md-3">
           <p className="ftitle">PROFILE</p>
           <ul>
            <li className="lst">My Account</li>
            <li  className="lst">Checkout</li>
            <li  className="lst">Order Tracking</li>
            <li  className="lst">Help & Support</li>
            </ul>
           </div>
           <div className="col-md-3">
           <p className="ftitle">ABOUT US</p>
           <ul>
            <li  className="lst">Online Consulation: +1 (234) 567 89</li>
            <li  className="lst">Address: 4578 Marmora Road, Glasgow</li>
            <li  className="lst">Working Time: Mon–Sat: 08:00–18:00</li>
            </ul>
           </div>
           
           </div> 
           <br/>
          
        </div>
        <div style={{backgroundColor : '#242520', width: '100%', height: '50px'}}>
        
        <div className="container">

        <p className="last">Copyright © 2018. All Rights Reserved</p>
        </div>
          
          </div>

          </div>
       
    )
}

export default Footer
