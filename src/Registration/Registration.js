import React, { useState } from "react";
import "./Registration.css";
import PropTypes from "prop-types";
import { Card, Col, Label, Row, FormGroup, Button } from "reactstrap";
import { Redirect } from "react-router";



const Registration = () => {

  const [username,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();

   await fetch("http://localhost:8000/api/register", 
  {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  setRedirect(true);
  }
  
  if (redirect) {
    return <Redirect to="/ru/settings"/>
  }
  
  

  return (   
<div className="content">
<br></br>
<br></br>
<br></br>
<br></br>
<Row>
  <Col lg="3">
      <Card className="card-chart">
        </Card>
    </Col>

    <Col lg="6">
      <Card className="card-chart">
      <div className="login-wrapper">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          <p>Логин</p>
          <input className="input-size" type="text" onChange={e => setName(e.target.value)}/>
        </Label>
        </FormGroup>
      <FormGroup>
        <Label>
          <p>email</p>
          <input className="input-size" type="text" onChange={e => setEmail(e.target.value)}/>
        </Label>
        </FormGroup>
        <FormGroup >
        <Label >
          <p>Пароль</p>
          <input className="input-size" type="password" onChange={e => setPassword(e.target.value)}/>
        </Label>
        </FormGroup>
        <FormGroup >
        <Label >
          <p>Подтвердите пароль</p>
          <input className="input-size" type="password" onChange={e => setPassword(e.target.value)}/>
        </Label>
        </FormGroup>
        <div>
          <hr></hr>
        <Button className="button-size" color="danger" size='lg'>Войти</Button>
        </div>
      </form>
      <hr></hr>
    </div>
    </Card>
    </Col>

    <Col lg="3">
      <Card className="card-chart">
        
      </Card>
    </Col>


  </Row>


  </div>
    
  );
}

export default Registration;
