import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Progress } from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Заголовок</h5>
                <CardTitle tag="h3">
                 НННН
                </CardTitle>
              </CardHeader>
              <CardBody>
                
                
                          <div>
                  <div className="text-center">0%</div>
                  <Progress />
                  
                  
                  <div className="text-center">Прогресс</div>
                  <Progress multi>
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                    <Progress bar color="warning" value="20" />
                    <Progress bar color="danger" value="5" />
                  </Progress>
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
