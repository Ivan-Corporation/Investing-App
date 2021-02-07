import React from "react";

// reactstrap components
import { Button, Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { backgroundColors } from "contexts/BackgroundColorContext";

function FixedPlugin(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };
  return (
    <div className="fixed-plugin">
      <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li className="header-title">Настройки интерфейса</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <Badge
                color="primary"
                className={
                  props.bgColor === backgroundColors.primary ? "active" : ""
                }
                onClick={() => {
                  props.handleBgClick(backgroundColors.primary);
                }}
              />{" "}
              <Badge
                color="info"
                className={
                  props.bgColor === backgroundColors.blue ? "active" : ""
                }
                onClick={() => {
                  props.handleBgClick(backgroundColors.blue);
                }}
              />{" "}
              <Badge
                color="success"
                className={
                  props.bgColor === backgroundColors.green ? "active" : ""
                }
                onClick={() => {
                  props.handleBgClick(backgroundColors.green);
                }}
              />{" "}
              
            </div>
            
            <hr></hr>

            
          </li>
          <li className="adjustments-line text-center color-change">
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <>
                  <span className="color-label">СВЕТЛАЯ ТЕМА</span>{" "}
                  <Badge
                    className="light-badge mr-2"
                    onClick={() => changeTheme(themes.light)}
                  />{" "}
                  <Badge
                    className="dark-badge ml-2"
                    onClick={() => changeTheme(themes.dark)}
                  />{" "}
                  <span className="color-label">ТЁМНАЯ ТЕМА</span>{" "}
                </>
              )}
            </ThemeContext.Consumer>
          </li>
          <li className="button-container">
            
            <Button
              color="default"
              block
              className="btn-round"
              outline
              href=""
            >
              Туториалы
            </Button>
          </li>
          <li className="header-title">Ещё ссылка?</li>
          <li className="button-container">
            <Button
              href=""
              className="btn-round"
              disabled
              block
              color="danger"
            >
              Ссылка
            </Button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
