import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class GetAccess extends PureComponent {
  render() {
    return (
      <div className="ContainerOther">
        <header>
          <img className='teamLogoStyle' src={require("../images/teamLogoTwo.png")} alt="logo" />
          <div className="linkContainer">
            <Link className="productVersion" to="/">
              Main
            </Link>
            <Link className="productVersion" to="/products">
              Products
            </Link>
            <Link className="productVersion" to="/services">
              Blog
            </Link>
            <Link className="productVersion" to="/contact">
              Contact
            </Link>
            <Link className="productVersion" to="/login">
              Log in
            </Link>
            <Link className="specialOne" to="/getAccess">
              GetAccess
            </Link>
          </div>
        </header>
      </div>
    )
  }
}

export default GetAccess