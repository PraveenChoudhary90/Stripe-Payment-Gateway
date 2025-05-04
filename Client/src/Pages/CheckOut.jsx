// import React from 'react'
// // import { useEffect, useContext, useState } from "react";
// import Table from 'react-bootstrap/Table';
// import { HiDocumentCurrencyRupee } from "react-icons/hi2";
// import Button from "react-bootstrap/esm/Button";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// // import axios from "axios";
// // import { cartEmpty } from "../cartSlice";
// import BASE_URL from '../config';
// // import {loadStripe} from '@stripe/stripe-js';

// function CheckOut() {

  
// const navigate= useNavigate();
//     const Product= useSelector(state=>state.mycart.cart);
//     console.log(Product);
//     const dispatch= useDispatch();
//     let totalAmount=0;
//     let productsName="";
//     let imgURL="";



//     const ans=Product.map((key)=>{
//         totalAmount+=key.price * key.qnty;
//          productsName+=key.name + ", ";
//         imgURL=`${BASE_URL}/${key.defaultImage}`;
//         return(
//             <>
//                <tr>
//                <td>
//                 <img src={`${BASE_URL}/${key.defaultImage}`} width="80" height="60" /> 
//                 </td>
//                 <td>{key.name}</td>
//                 <td>{key.brand}</td>
//                 <td>{key.price}</td>
//                 <td>
//                     {key.qnty}
//                 </td>
//                 <td>{key.price * key.qnty}</td>
//                </tr>
//             </>
//         )
//     })



//     //payment intrgration

//     const handlePay = async()=>{

//     }


//   return (
//     <>
    
//           <h1 align="center"> Your Checkout Page </h1>
//            <div id="cartone">
        
//           <Table striped bordered hover id="table">
//       <thead>
//         <tr>
//           <th>Product Pic</th>
//           <th>Product Name</th>
//           <th>Brand</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th> Total </th>
//         </tr>
//       </thead>
//         <tbody>
//          {ans}
//         </tbody>
//         </Table>
//         </div>

//          <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
//           Your Total  Paybale Amount 
//         < HiDocumentCurrencyRupee /> : {totalAmount}</h4>
//          <div id="pay"   style={{textAlign:"center"}}>
//          <Button onClick={handlePay} > Pay Now!</Button>
//          </div>
    
//     </>
//   )
// }

// export default CheckOut

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { HiDocumentCurrencyRupee } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import BASE_URL from '../config'; // Your image base URL

const stripePromise = loadStripe('pk_test_51RKGV8I6Nv23y5n8CnPSGkkDTdti3DAKy5CKr9blkVJaYN3U0NZ5YAQSrPSMsSSn8yHWdeGx0LNhGWOwOSIbcpEz00lPNnsd4y'); // Replace with your Stripe Publishable Key

function CheckOut() {
  const Product = useSelector((state) => state.mycart.cart);

  const totalAmount = Product.reduce((acc, item) => acc + item.price * item.qnty, 0);

  const handlePay = async () => {
    const stripe = await stripePromise;

    const cartItems = Product.map((item) => ({
  name: item.name,
  price: item.price,
  qnty: item.qnty,
  image: `${BASE_URL}/${item.defaultImage}`, // <-- Send full image URL
}));


    const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
      cartItems,
    });

    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  if (Product.length === 0) return <h4 align="center">Your cart is empty!</h4>;

  return (
    <>
      <h1 align="center">Your Checkout Page</h1>
      <div id="cartone">
        <Table striped bordered hover id="table">
          <thead>
            <tr>
              <th>Product Pic</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <img src={`${BASE_URL}/${item.defaultImage}`} width="80" height="60" alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.qnty}</td>
                <td>{item.price * item.qnty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h4 align="center" style={{ color: 'green', fontWeight: 'bold' }}>
        Your Total Payable Amount <HiDocumentCurrencyRupee />: {totalAmount}
      </h4>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handlePay}>Pay Now!</Button>
      </div>
    </>
  );
}

export default CheckOut;
