import React, { useEffect, useState} from 'react'
import { Col,Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



function View() {
  const navigate = useNavigate()

const [adult,setAdult] = useState({})

const {id} = useParams()
 console.log(id);


const baseUrl = `https://api.slingacademy.com/v1/sample-data/users/${id}`



const getdetail=async()=>{

try {
const res = await fetch(baseUrl)
const data  = await res.json()
console.log(data.user);
setAdult(data.user)
  
} catch (err) {
  console.log(err);
  
  
}

}
useEffect(()=>{
  getdetail()
},[])
const handleLogout=()=>{
localStorage.clear()
navigate('/login')

}

  return (
<Row><Col className=' d-flex  justify-content-end' style={{marginInlineEnd:30}}> 
<Button onClick={handleLogout} variant="danger">LOGOUT</Button>
</Col>

    <Row id='view'>
      <Col>
      <img className='img-fluid' src={adult.profile_picture} alt="" />
      </Col>

      <Col className='fluid'>
<h1 style={{color:"red"}}>{adult.first_name}  {adult.last_name}</h1>
<h2>Occupation:{adult.job}</h2>
<h3>Email:{adult.email}</h3>
<h3>DOB:{adult.date_of_birth}</h3>
<h3>Gender:{adult.gender}</h3>

<h3>Phone:{adult.phone}</h3>
<h3>Address:{adult.street}</h3>

<h3> {adult.city} ,{adult.state}, {adult.country}</h3>
<h3> {adult.zipcode}</h3>



      </Col>

    </Row>
    </Row>

  )
}

export default View