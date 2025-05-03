import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {

     const [input, setInput] = useState("");
  const [image, setImages] = useState("");


     const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
     }

    const handelImages = (e)=>{
        const files = e.target.files[0];
    }


  return (
    <>
    <div id="from">
    <h1>Add Product</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shoes  Name </Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handelInput}/>
      </Form.Group>
      

     <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Shoes  Brand </Form.Label>
        <Form.Control type="text" name='brand' value={input.brand} onChange={handelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Shoes  Price </Form.Label>
        <Form.Control type="text" name='price' value={input.price} onChange={handelInput}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shoes  Images </Form.Label>
        <Form.Control type="file" name='file' value={image} onChange={handelImages}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
    </>
  )
}

export default Registration