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
  Cryptocurrency,
 
} from "variables/charts.js";

function Crypto(props) {
  const [bigChartData, setbigChartData] = React.useState("cryptoData1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
      <h1>Крипта - "Бузкоин"</h1>
        <Row>
          
          <Col xs="9">
            <Card className="card-chart">
              <CardHeader>
                
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Криптовалюта:</h5>
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
                          active: bigChartData === "cryptoData1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("cryptoData1")}
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
                          active: bigChartData === "cryptoData2",
                        })}
                        onClick={() => setBgChartData("cryptoData2")}
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
                          active: bigChartData === "cryptoData3",
                        })}
                        onClick={() => setBgChartData("cryptoData3")}
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
                    data={Cryptocurrency[bigChartData]}
                    options={Cryptocurrency.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>





          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Топ 4 крипты по росту</b></h4>
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
                        <a href="https://github.com/Ivan-Corporation">Bit</a>
                        </td>
                      <td className="text-center">133</td>
                      <td className="text-center">+0.50</td>                      
                      <td className="text-center">-1,68%</td>
                    </tr>
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">Bit</a>
                      </td>
                      <td className="text-center">12</td>
                      <td className="text-center">+0.50</td>                     
                      <td className="text-center">-1,68%</td>
                    </tr>
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">Bit</a>
                      </td>
                      <td className="text-center">13</td>
                      <td className="text-center">+0.50</td>                      
                      <td className="text-center">-1,68%</td>
                    </tr>
                    
                    <tr>
                      <td>
                      <a href="https://github.com/Ivan-Corporation">Bit</a>
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




        


          



        
      </div>
    </>
  );
}

export default Crypto;
