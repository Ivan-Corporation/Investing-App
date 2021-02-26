import React from 'react';

import tutor from 'assets/tutorials/tutor.jpg'

import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col, CardHeader
} from 'reactstrap';

const Tutorials = (props) => {
  return (
    <div className="content">
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Туториалы:</CardTitle>
          </CardHeader>
          <CardBody>

    <CardGroup>

    <Col md="4">
      <Card>
        <CardImg top width="100%" src={tutor} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Туториал 1</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Подзаголовок</CardSubtitle>
          <CardText>
          Это описание для туториала, тест тест тест. Это описание для туториала, тест тест тест
          Это описание для туториала, тест тест тест 
          </CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      </Col>


        <Col md="4">
      <Card>
        <CardImg top width="100%" src={tutor} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Туториал 2</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Подзаголовок</CardSubtitle>
          <CardText>
            Это описание для туториала, тест тест тест. Это описание для туториала, тест тест тест
          Это описание для туториала, тест тест тест 
             </CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      </Col>


      <Col md="4">
      <Card>
        <CardImg top width="100%" src={tutor} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Туториал 3</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Подзаголовок</CardSubtitle>
          <CardText>
          Это описание для туториала, тест тест тест. Это описание для туториала, тест тест тест
          Это описание для туториала, тест тест тест 
          </CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      </Col>



    </CardGroup>

    </CardBody>
    </Card>
    </Col>
    </Row>
    </div>
  );
};

export default Tutorials;