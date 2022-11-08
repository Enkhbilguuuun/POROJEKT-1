import React, { PureComponent } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export class Contact extends PureComponent {
  render() {
    return (
      <div className="ContainerOther">
        <Header />
      </div>
    );
  }
}

export default Contact;
