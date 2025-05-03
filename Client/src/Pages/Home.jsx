import React, { useEffect, useState } from 'react'
import BASE_URL from '../config'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
  const [mydata, setMydata] = useState([]);


  const loadData = async()=>{
    const api = `${BASE_URL}/shose/ProductDisplay`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  loadData();
},[]);



      

const ans = mydata.map((key)=>{
  return(
    <>
     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={`${BASE_URL}/${key.defaultImage}`} height="300"  />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
           <h6>Brand : {key.brand}</h6>
           <h6 style={{color:"red"}}>Product Price : {key.price}</h6>
        </Card.Text>
        {/* <Button variant="warning" style={{color:"black"}}  onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, description:key.description, brand:key.brand, 
          model:key.model,ram:key.ram,system:key.system,size:key.size,harddisk:key.harddisk,
           price:key.price, defaultImage:key.defaultImage, images:key.images, qnty:1}))}}>Add to Cart</Button> */}
           <Button variant='warning'>Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
  )

})


  return (
    <>
    <h1>Welcome to home Page</h1>
    <div id="card">
      {ans}
    </div>

    
    </>
  )
}

export default Home