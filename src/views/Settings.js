import FixedPlugin from "components/FixedPlugin/FixedPlugin";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import React from "react";
import settings from "../assets/svg/settings.svg"


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Login from "Login/Login";


function Settings() {

  

  // if (   ) {
    
  //   return <Login />;
  // }else
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h4 className="title"> <img src={settings}/> Редактирование профиля</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Необязательное поле</label>
                        <Input
                          defaultValue="Что-то"
                          disabled
                          placeholder="Что-то"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Имя пользователя</label>
                        <Input
                          defaultValue="Иваныч"
                          placeholder="Иван"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input placeholder="bukashka@gmail.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Имя (Необязательно)</label>
                        <Input
                          defaultValue="Иван"
                          placeholder="Иван"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Фамилия (Необязательно)</label>
                        <Input
                          defaultValue=""
                          placeholder="Русский"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Город</label>
                        <Input
                          defaultValue="Колыма"
                          placeholder="Колыма"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Страна</label>
                        <Input
                          defaultValue="Россия"
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Индекс</label>
                        <Input placeholder="0" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Обо мне</label>
                        <Input
                          cols="80"
                          defaultValue="Я человек"
                          placeholder="Расскажите о себе :)"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Сохранить
                </Button>
              </CardFooter>
            </Card>
          </Col>


          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  {/* Decoration */}
                  <div className="block block-one" />
                  <div className="block block-two" />

                  <div className="block block-three" />
                  <div className="block block-four" />

                  <a href="#ivan" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/Penultimo.jpg").default}
                    />
                    <h3 className="title">Иваныч</h3>
                  </a>
                  <p className="description">Инвестор</p>
                </div>
                <div className="card-description">
                 <center> Так и умирает свобода... Под гром апплодисментов</center>
                </div>
              </CardBody>
              
            </Card>
          </Col>
        </Row>



        <Row>
          <Col md="12">
            <BackgroundColorContext.Consumer>
          {({ color, changeColor }) => (
            <FixedPlugin bgColor={color} handleBgClick={changeColor} />
            )}
        </BackgroundColorContext.Consumer>
        </Col>
        </Row>
      </div>
    </>
  );
}

export default Settings;



        
