import React, { useState } from "react";
import "./Registration.css";
import PropTypes from "prop-types";
import { Card, Col, Label, Row, FormGroup, Button } from "reactstrap";




async function Registration (credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}

export default function Login ({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setUserPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await Registration({
      username,
      password
    });
    setToken(token);
  };


  

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



Registration.propTypes = {
  setToken: PropTypes.func.isRequired
};
