import React from 'react'
// import { useEffect, useContext, useState } from "react";
import Table from 'react-bootstrap/Table';
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { cartEmpty } from "../cartSlice";
import BASE_URL from '../config';
import {loadStripe} from '@stripe/stripe-js';

function CheckOut() {

  
const navigate= useNavigate();
    const Product= useSelector(state=>state.mycart.cart);
    console.log(Product);
    const dispatch= useDispatch();
    let totalAmount=0;
    let productsName="";
    let imgURL="";



    const ans=Product.map((key)=>{
        totalAmount+=key.price * key.qnty;
         productsName+=key.name + ", ";
        imgURL=`${BASE_URL}/${key.defaultImage}`;
        return(
            <>
               <tr>
               <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} width="80" height="60" /> 
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.price}</td>
                <td>
                    {key.qnty}
                </td>
                <td>{key.price * key.qnty}</td>
               </tr>
            </>
        )
    })



    //payment intrgration

    const handlePay = async()=>{
        const stripe = await loadStripe("");
        

        const body = {
            Products:Product
        }
        const headers = {
          "Content-Type":"application/json"
        }

        const response = await fetch(`${BASE_URL}/shoes/create-checkout-session`,{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
        })
    
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });
    }


  return (
    <>
    
          <h1 align="center"> Your Checkout Page </h1>
           <div id="cartone">
        
          <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>Product Pic</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th> Total </th>
        </tr>
      </thead>
        <tbody>
         {ans}
        </tbody>
        </Table>
        </div>

         <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
          Your Total  Paybale Amount 
        < HiDocumentCurrencyRupee /> : {totalAmount}</h4>
         <div id="pay"   style={{textAlign:"center"}}>
         <Button onClick={handlePay} > Pay Now!</Button>
         </div>
    
    </>
  )
}

export default CheckOut