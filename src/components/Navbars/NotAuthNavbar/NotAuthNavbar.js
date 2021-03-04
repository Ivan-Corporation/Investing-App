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
import { Redirect } from "react-router-dom";
import Login from "Login/Login";



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
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <h4>Поиск</h4>

                </Button>
              </InputGroup>




              <InputGroup className="search-bar">
                <a href='/registration'>
                <Button >
                  <i className="tim-icons icon-single-02" />Регистрация
                
                </Button>
                </a>
              </InputGroup>



              


              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>





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