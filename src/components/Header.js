import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          collapseOnSelect
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <h1
                  style={{
                    color: "white",
                    marginBottom: "-0.4rem",
                    marginLeft: '35rem'
                  }}
                >
                  Stormly
                </h1>
              </Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
