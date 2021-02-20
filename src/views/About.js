import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function About() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Коротко</h5>
                <CardTitle tag="h2">
                  О проекте
                </CardTitle>
              </CardHeader>
              <CardBody>
                  <h4>Заголовкинс</h4>
                <p>Я предлагаю в виде горизонтальных списков. Пример на фото
                ВАЖНО
                Новости будут как от нас, так и от других источников.
                Я хочу сделать парсер, который бы парсил финансовые новостные источники, и загружал бы их статьи в бд, а пользователь бы мог в настройках поставить галочки напротив интересных ему источников. И если статьи из парсера будут попадать в бд, откуда их подгрузит сайт, то вот наши статьи я бы хотел добавлять через админ панель. И да, нужна возможность вставлять несколько фоток в текст, и пускай первая – автоматически становилась бы в превью статьи

                Каждая пятая строчка пусть будет рекламой гугла. Но эт на будущее.
                </p>
                <hr></hr>
                <p>Бла бла бла</p>
                
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category"></h5>
                <CardTitle tag="h3">
                  Компонент
                </CardTitle>
              </CardHeader>
              <CardBody>
                  
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
