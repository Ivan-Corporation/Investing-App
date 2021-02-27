import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Stock(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
      <h1>Акция - "Boening CO"</h1>
        <Row>
          
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Акция:</h5>
                    <CardTitle tag="h3">
                    <i className="tim-icons icon-sound-wave text-info" />Линейный график</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Месяцы
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-watch-time" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Дни
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-user-run" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Годы
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-time-alarm text-info" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>


          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Топ 4 акции по росту</b></h4>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                <Table className="tablesorter" >
                  <thead className="text-primary">
                    <tr>
                      <th>Название</th>
                      <th className="text-center">Цена</th>
                      <th className="text-center">Скачок</th>
                      <th className="text-center">%</th>
                    </tr>
                    
                  </thead>
                  
                  <tbody>
                    
                    <tr>
                      
                      <td>
                        <a href="https://github.com/Ivan-Corporation">CVX</a>
                        </td>
                      <td className="text-center">133</td>
                      <td className="text-center">+0.50</td>                      
                      <td className="text-center">-1,68%</td>
                    </tr>
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">GE</a>
                      </td>
                      <td className="text-center">12</td>
                      <td className="text-center">+0.50</td>                     
                      <td className="text-center">-1,68%</td>
                    </tr>
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">F</a>
                      </td>
                      <td className="text-center">13</td>
                      <td className="text-center">+0.50</td>                      
                      <td className="text-center">-1,68%</td>
                    </tr>
                    
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">AAPL</a>
                      </td>
                      <td className="text-center">55</td>
                      <td className="text-center">-0.50</td>                     
                      <td className="text-center">-1,68%</td>
                    </tr>

                    
                  </tbody>
                </Table>
                 
                </div>
              </CardBody>
            </Card>
          </Col>




        </Row>




        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Отчеты:</h5>
                <h3>Доход в квартал</h3>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-danger" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Выплаты акционерам:</h5>
                <h3>Дивиденды</h3>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-gift-2 text-success"/> 3$ на акцию
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Всего:</h5>
                <h3>Акции в обращении</h3>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-money-coins text-white" /> 2.123.444
                </CardTitle>
              </CardHeader>     
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>   
              </CardBody>
            </Card>
          </Col>
          <Col lg="8" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Индексы?</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" >
                  <thead className="text-primary">
                    <tr>
                      <th>Биржа</th>
                      <th>Страна</th>
                      <th>Город</th>
                      <th className="text-center">Индекс</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Австралийская фондовая биржа</td>
                      <td>Австралия</td>
                      <td>Мельбурн</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Тель-Авивская фондовая биржа</td>
                      <td>Израиль</td>
                      <td>Тель-Авив</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Московская фондовая биржа</td>
                      <td>Россия</td>
                      <td>Москва</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Американская фондовая биржа</td>
                      <td>США</td>
                      <td>Нью-Йорк</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>NASDAQ</td>
                      <td>США</td>
                      <td>Нью-Йорк</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Берлинская фондовая биржа</td>
                      <td>Германия</td>
                      <td>Берлин</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
          </Row>


          



        <Row>
                            
          
        </Row>
      </div>
    </>
  );
}

export default Stock;
