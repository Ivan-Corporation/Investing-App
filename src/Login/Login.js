import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Card, Col, Row } from "reactstrap";



async function loginUser (credentials) {
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
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  };


  

  return (   
<div className="content">

<h1>Калькуляторы</h1>
<Row>
  <Col lg="3">
      <Card className="card-chart">
        </Card>
    </Col>

    <Col lg="6">
      <Card className="card-chart">
      <div className="login-wrapper">
      <h1>Please Enter Fields</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setUserPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
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



Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
