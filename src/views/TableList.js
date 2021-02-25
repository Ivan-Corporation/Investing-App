import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Таблица</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Имя</th>
                      <th>Фамилия</th>
                     
                      <th className="text-center">Доход</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Я</td>
                      <td>Абаба</td>
                      
                      <td className="text-center">$0</td>
                    </tr>
                    <tr>
                      <td>Я</td>
                      <td>Абаба</td>
                      
                      <td className="text-center">$0</td>
                    </tr>
                    <tr>
                      <td>Я</td>
                      <td>Абаба</td>
                      
                      <td className="text-center">$0</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Таблица 2</CardTitle>
                <p className="category">без бекграунда</p>
              </CardHeader>
              <CardBody>
                <p>fasfasfasf</p>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </div>
    </>
  );
}

export default Tables;
