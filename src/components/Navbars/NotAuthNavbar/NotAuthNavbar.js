import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { useState } from 'react';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormGroup,
  Form,
  FormFeedback,
  FormText,
  Label
} from "reactstrap";



function NotAuthNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };


  // Modal logic
  const {
    buttonLabel,
    className
  } = props;


  const [modalRegistration, setModalRegistration] = useState(false);

  const [modalAuthorisation, setModalAuthorisation] = useState(false);

  

  const toggleRegistration = () => setModalRegistration(!modalRegistration);

  const toggleAuthorisation = () => setModalAuthorisation(!modalAuthorisation);



 // this function opens and closes the sidebar on small devices
 const [sidebarOpened, setsidebarOpened] = React.useState(
  document.documentElement.className.indexOf("nav-open") !== -1
);

 const toogleSidebar = () => {
  document.documentElement.classList.toggle("nav-open");
  setsidebarOpened(!sidebarOpened);
};



  return (
    <>

      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >

              {/* Here it is mobile version toogler */}
              <NavbarToggler onClick={toogleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#ivan" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>

          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>

          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>

              <InputGroup className="search-bar">
                <Button color="danger" onClick={toggleRegistration}>
                  <i className="tim-icons icon-spaceship" />Регистрация

                </Button>
              </InputGroup>

              <InputGroup className="search-bar">
                <Button color="info" onClick={toggleAuthorisation}>
                  <i className="tim-icons icon-single-02" />Авторизация

                </Button>
              </InputGroup>



              <InputGroup className="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <h4>Поиск</h4>

                </Button>
              </InputGroup>







              


              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>




      <Modal
        isOpen={modalAuthorisation}
        toggle={toggleAuthorisation}
        modalClassName="modal-black">
        <ModalHeader
          toggle={toggleAuthorisation}><h4>Авторизация</h4></ModalHeader>
        <ModalBody>
      <Form>
        <FormGroup>
         <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>

         <FormGroup>
          <Label for="examplePassword">Пароль</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
        </FormGroup>
      </Form>
      <br></br>
      <Button color="info" size="lg" block>Войти</Button>
        </ModalBody>
        
      </Modal>



      <Modal
        isOpen={modalRegistration}
        toggle={toggleRegistration}
        modalClassName="modal-black">
        <ModalHeader 
          toggle={toggleRegistration}><h4>Регистрация</h4></ModalHeader>
        <ModalBody>

        <Form>
        <FormGroup>
         <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>

         <FormGroup>
          <Label for="examplePassword">Пароль</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Подтвердите пароль</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
        </FormGroup>

      </Form>
      <br></br>
      <Button color="info" size="lg" block>Зарегистрироваться</Button>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>




      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="Поиск" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>




    </>
  );
}

  export default NotAuthNavbar;