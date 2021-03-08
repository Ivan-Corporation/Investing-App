import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Card, Col, Label, Row, FormGroup, Button } from "reactstrap";
import { Redirect } from "react-router";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [redirect,setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/login", 
  {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    credentials: 'include', //cookies
    body: JSON.stringify({
      email,
      password
    })
  });
  setRedirect(true)
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
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          <p>Email</p>
          <input className="input-size" type="email" placeholder="Email адрес" onChange={e => setEmail(e.target.value)}/>
        </Label>
        </FormGroup>
        <FormGroup >
        <Label >
          <p>Пароль</p>
          <input className="input-size" type="password" placeholder="Пароль" onChange={e => setUserPassword(e.target.value)}/>
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


export default Login;