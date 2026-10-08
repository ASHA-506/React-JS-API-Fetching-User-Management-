import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import{ Col,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
           console.log(email,password);
    const navigate = useNavigate()


    const handleLogin=()=>{
      if(email==""||password==""){
        alert("Please fill the login form")

      }else 
        if(email in sessionStorage){
          const user = JSON.parse(sessionStorage.getItem(email))
          if(user.password==password)
          alert("Welcome to Studens Details")
          navigate('/Dashboard')
        }
       else{
        alert("Please Register before Login") 
             navigate('/NewRegister')
            

      }
    }       
  
return (

        <div>
        <Row  style={{margin:50}}>
          <Col></Col>
         <Col>
<Form style={{alignItems:'center', border:3}}>        
  
        <h1 style={{color:"green", textAlign:"center",fontSize:50}} >Login</h1>

  <Form.Group controlId="formbasicEmail" className="mb-3">
        <Form.Label><b>Email Address</b></Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
        <Form.Text className='text-muted'>We'll never share your email with anyone</Form.Text>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your Password'/>
      </Form.Group>
            
                     <Button  onClick={handleLogin} variant="success">Login</Button>
                     <p>If you don't have an account <span ><Link  style={{color:'red',textDecoration:'none'}}     to="/">REGISTER</Link></span></p>
                   
</Form>                   
          </Col>


          <Col></Col>

        </Row>
    </div>

  )
}

export default Login
