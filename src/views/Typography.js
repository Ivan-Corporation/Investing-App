import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Заголовок</h5>
                <CardTitle tag="h3">
                  Достижения?
                </CardTitle>
              </CardHeader>
              <CardBody>
                
                <div className="typography-line">
                  <span>Цитата</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      Жирафы бессердечные создания...<br />
                      <br />
                      <small>-Иван</small>
                    </p>
                  </blockquote>
                </div>
                <CardTitle tag="h3">
                  Стили 
                </CardTitle><hr/><br></br>

                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-muted">
                    Тест текста в разных вариациях
                  </p>
                </div>
                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-primary">
                  Тест текста в разных вариациях
                  </p>
                </div>
                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-info">
                  Тест текста в разных вариациях
                  </p>
                </div>
                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-success">
                  Тест текста в разных вариациях
                  </p>
                </div>
                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-warning">
                  Тест текста в разных вариациях
                  </p>
                </div>
                <div className="typography-line">
                  <span>Текст</span>
                  <p className="text-danger">
                  Тест текста в разных вариациях
                  </p>
                </div>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
