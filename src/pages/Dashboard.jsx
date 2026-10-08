import React, { useState , useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Dashboard() {
  let baseUrl = "https://api.slingacademy.com/v1/sample-data/users"

  const [data,setData] = useState([])

  
  const getdetails= async()=>{
    try {
      const response = await fetch(baseUrl)
      let details= await response.json()
      console.log(details.users);
      setData(details.users)
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getdetails()
  },[])


  return (


<div  style={{alignItems:"center"}}>

<div style={{margin:10,padding:5}}><Link to={'/search'}><Button type='button' variant="danger">Search Students</Button></Link></div>
<h1 class="head1" style={{alignItems:"center"}}>Students Details</h1>

<Row >  {data?.map((users)=>(  
<Col >
<Card style={{width:"28em", height:"29em",margin:"1em"}} >
      <Card.Img  class="image"  style={{width:"22em", height:"18em"}} variant="top" src={users.profile_picture} />
      <Card.Body class="cbody">
      <Card.Title class="title"><h3>{users.first_name}  {users.last_name}</h3></Card.Title>
        <Card.Subtitle className="mb-2"><h5>{users.job}</h5></Card.Subtitle>

        <Link  key={users.id}  to={`/View/${users.id}`}>
        <button class="btn1" type='button'>View Details</button>
        </Link>
      </Card.Body>
</Card>

</Col>
        ) ) }: {"No data"}


</Row>


     



        </div>

  

   
  )
}

export default Dashboard
