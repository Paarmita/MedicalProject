import React from "react";
import { Redirect } from "react-router-dom";
import logo from "../../Images/logo.svg"
import { HashLink } from "react-router-hash-link";


class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.logUserOut();
    this.setState({ redirect: true });
  }

  componentDidMount(){
    console.log('this',this);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    let email = "hi";
    if (localStorage.getItem("data")) {
      console.log(localStorage.getItem("data"));
      email = JSON.parse(localStorage.getItem("data")).email;
    }
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <HashLink className="navbar-brand" to="/#">
          <img src={logo} width="40" height="40" alt="logo" />
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Diseases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pathy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Share Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ask Suggestions</a>
              </li>
            </ul>
             <ul className="nav navbar-nav navbar-right ml-md-auto ">
               <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Settings</a>
          <a class="dropdown-item" href="#">Logout</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Privacy Policy</a>
          <a class="dropdown-item" href="#">Terms of use</a>
        </div>
      </li>      
      <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default DashboardHeader;
