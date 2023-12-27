import "./main_menu.css";
import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.png";
import Menu from "./menu_bar"; 

function MainMenu() {
  return (
    <div className="main-page">
      <div className="col-main">
        <div className="col-1">
          <img className="logo" src={logo} alt="BobaTalk logo" />
          <button className="hamburger-button">
            <img
              className="hamburger"
              src={hamburger}
              alt="hamburger button"
            ></img>
          </button>
        </div>
        <Menu />
        <div className="menu-bg"></div>
      </div>
      <div className="square-2">
        <div className="col-2">
          <p>Click our menu selections to get started!</p>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
