import React from "react";
import boening from "./../assets/img/boening.png"
import tesla from "./../assets/img/tesla.png"
import gazprom from "./../assets/img/gazprom.png"
import stockLogo from "../assets/css/stockLogo.css"
import arrow_red from "./../assets/img/arrow_red.png"
import arrow_green from "./../assets/img/arrow_green.png"
import briefcase from './../assets/svg/briefcase.svg'
import wallet from './../assets/svg/wallet.svg'

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Login from "Login/Login";

function Portfolio() {
  

  // if (  ) {

    return <Login />;
  // } else
//     return (
//       <>
//         <div className="content">


//           <Row>

//             <Col md="12">
//               <Card>

//                 <CardHeader>
//                   <h3 className="title">Ваш портфель <img src={briefcase} alt="arrow" /></h3>

//                   <p className="category">
//                     Все {" "}
//                     <a href='http://localhost:3000/ru/stock-list'>доступные акции</a>
//                   </p>
//                 </CardHeader>
//                 <br />
//                 <br />
//                 <h1><center>Список акций и валют <img src={wallet} alt="wallet" /></center></h1>
//                 <hr></hr>
//                 <CardBody className="all-icons">
//                   <Row>

//                     <Col
//                       className="font-icon-list col-xs-6 col-xs-6"
//                       lg="3"
//                       md="3"
//                       sm="4"
//                     >
//                       <div className="stock-card">
//                         <img className='stockLogo' src={tesla} alt="stockLogo" />
//                         <p>TESLA</p>
//                         <p><img className="arrow" src={arrow_green} alt="arrow" /> 1000$</p>
//                       </div>
//                     </Col>
//                     <Col
//                       className="font-icon-list col-xs-6 col-xs-6"
//                       lg="3"
//                       md="3"
//                       sm="4"
//                     >
//                       <div className="stock-card">
//                         <img className='stockLogo' src={boening} alt="stockLogo" />
//                         <p>Boening CO</p>
//                         <p><img className="arrow" src={arrow_green} alt="arrow" /> 123$</p>
//                       </div>
//                     </Col>
//                     <Col
//                       className="font-icon-list col-xs-6 col-xs-6"
//                       lg="3"
//                       md="3"
//                       sm="4"
//                     >
//                       <div className="stock-card">
//                         <img className='stockLogo' src={gazprom} alt="stockLogo" />
//                         <p>Gazprom</p>
//                         <p><img className="arrow" src={arrow_red} alt="arrow" /> 50$</p>
//                       </div>
//                     </Col>
//                     <Col
//                       className="font-icon-list col-xs-6 col-xs-6"
//                       lg="3"
//                       md="3"
//                       sm="4"
//                     >
//                       <div className="stock-card">
//                         <img className='stockLogo' src={tesla} alt="stockLogo" />
//                         <p>TESLA</p>
//                         <p><img className="arrow" src={arrow_green} alt="arrow" /> 1000$</p>
//                       </div>
//                     </Col>

//                   </Row>



//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </>
//     );
}

export default Portfolio;
