import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import bell from '../assets/svg/bell.svg'

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Тест уведомления - <b>Давай! давай! блин...</b>
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 5,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h3"><img src={bell}/> Уведомления:</CardTitle>
              </CardHeader>
              <CardBody>
                
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Уведомление 1
                  </span>
                </UncontrolledAlert>

                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Уведомление 2
                  </span>
                </UncontrolledAlert>

                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Уведомление 3
                  </span>
                </UncontrolledAlert>

                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Уведомление 4
                  </span>
                </UncontrolledAlert>

              </CardBody>
            </Card>

          </Col>
          

          
        </Row>
      </div>
    </>
  );
}

export default Notifications;
