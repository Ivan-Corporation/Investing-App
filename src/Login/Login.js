import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Card, Col, Label, Row, FormGroup, Button } from "reactstrap";



const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setUserPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://localhost:5001/api/User/login", 
  {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({
      userName,
      password
    })
  });
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
          <p>Логин</p>
          <input className="input-size" type="text" onChange={e => setUserName(e.target.value)}/>
        </Label>
        </FormGroup>
        <FormGroup >
        <Label >
          <p>Пароль</p>
          <input className="input-size" type="password" onChange={e => setUserPassword(e.target.value)}/>
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