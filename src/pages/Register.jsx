import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import{ Col,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';



function Register() {
const navigate =  useNavigate()


  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
       console.log(username,email,password);

  const handleRegister=()=>{
    if(username==""||email==""||password==""){
      alert("Please fill the form")
    }
    else{
     if(email in sessionStorage){
      alert("User already exists")
     } 
     else{
      sessionStorage.setItem(email,JSON.stringify({username,email,password}))
      alert("Registered Successfully")
             navigate('/Login')

     }
    }

  }     

 return (

        <div>
        
       
        <Row></Row>
        <Row style={{margin:50}}>
          <Col></Col>
          <Col>

          <Form  style={{alignItems:'center', border:3}}  >
          <h1  style={{color:"red", textAlign:"center",fontSize:50}} >REGISTER</h1>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label><b>UserName</b></Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter UserName'/>
        </Form.Group>
      
        <Form.Group controlId="formbasicEmail" className="mb-3">
        <Form.Label><b>Email Address</b></Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
        <Form.Text className='text-muted'>We'll never share your email with anyone</Form.Text>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your Password'/>
        </Form.Group>
        <Button onClick={handleRegister} variant="danger">Register</Button>
         <p>If you have an account <span ><Link  style={{color:'green',textDecoration:'none'}}  to="/login">LOGIN</Link></span></p>


          </Form>


          </Col>
          <Col></Col>
        </Row>
    </div>




  )
}

export default Register