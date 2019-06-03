import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ""
    };
  }

  onSearchFieldChange = e => {
    this.setState({ searchField: e.target.value });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    window.location.href = `/mysearch/?query=${this.state.searchField}`;
  };

  render() {
    return (
      <Navbar
        className="text-center topnav px-5"
        expand="lg"
        sticky="top"
        bg="warning"
        variant="light"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="35"
            className="mx-2 "
            alt="TMDB Logo "
          />
          Flixify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
          <form onSubmit={this.onSearchSubmit} className="d-inline-flex">
            <FormControl
              required
              type="text"
              placeholder="Search"
              className="mr-2"
              value={this.state.searchField}
              onChange={this.onSearchFieldChange}
            />

            <Button type="submit" variant="outline-success">
              {" "}
              <i className="fas fa-search" />
            </Button>
          </form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
