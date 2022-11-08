import "../App.css";
import { Link } from "react-router-dom";
import Instant from "./Instant";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { ColorModeContext } from "../App.jsx";

const Header = () => {
  const { setIsDark } = useContext(ColorModeContext);
  return (
    <div className="headerContainer">
      <header>
        <img
          style={{ height: "60px" }}
          src={require("../images/teamLogoTwo.png")}
          alt="logo"
        />
        <div className="linkContainer">
          <Link className={"colorOfLinks"} to="../">
            Main
          </Link>
          <Link className="colorOfLinks" to="/products">
            Products
          </Link>
          <Link className="colorOfLinks" to="/services">
            Services
          </Link>
          <Link className="colorOfLinks" to="/contact">
            Contact
          </Link>
          <Link className="colorOfLinks" to="/login">
            Log in
          </Link>
          <Link className="spclOne" to="/getAccess">
            Get Access
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
