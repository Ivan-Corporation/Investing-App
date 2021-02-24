import React from "react";

import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
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
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th className="text-center">4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td className="text-center">4</td>
                    </tr>
                   
                  </tbody>
                </Table>
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

export default Tables;
