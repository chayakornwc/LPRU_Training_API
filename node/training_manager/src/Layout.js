import React, {Component} from "react";
import { BrowserRouter, Link } from "react-router-dom";
function handleClick  (e) {
    var criteria;
    e.preventDefault();
    criteria = React.findDOMNode(this.refs.search).value.trim();
    this.props.onSearch(criteria)
}
class Layout extends Component {

  render() {
    return (
        <div>
          <BrowserRouter>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top"  id="mainNav">
                <div className="container">
                  <Link className="navbar-brand js-scroll-triggers" to="/"><img src="../img/logo.png" /> </Link>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fa fa-bars"/>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                   <ul className="navbar-nav ml-auto" id="head-selector">
                    <li className="nav-item">
                      <input ref="search" type="search" placeholder="Search criteria" />
                      <button onClick={this.handleClick}><i className="fa fa-search"  /></button>

                    </li>
                     <li className="nav-item">
                      <Link className="nav-link js-scroll-trigger" to="/signin">ลงชื่อเข้าใช้</Link>
                     </li>
                     <li className="nav-item">
                      <Link className="nav-link js-scroll-trigger" to="/signup">ลงทะเบียน</Link>
                     </li>
                   </ul>
                     </div>
                </div>
              </nav>
            </BrowserRouter>
        </div>
    );
  }
}
export default Layout;
