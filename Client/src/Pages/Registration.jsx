import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from "axios";
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
        // const files = e.target.files;
        setImages(e.target.files);
        console.log(image);
    }


     const HandelSubmit =async(e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/shose/InsertProduct`;
        const formData = new FormData();
         for (let key in input) {
            formData.append(key, input[key]);
          }
        
          for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
          }  
          
        try {
            const resposne = await axios.post(api, formData);
            console.log(resposne.data);
            alert(resposne.data.msg);
        } catch (error) {
            console.log(error);
        }


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
        <Form.Label>Uploades Shoes  Images </Form.Label>
        <Form.Control type="file" multiple  onChange={handelImages}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
  </div>
    </>
  )
}

export default Registration