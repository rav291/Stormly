import React from "react";
import "./bootstrap.min2.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={Main} />
          </Container>
        </main>
      </Router>
    </>
  );
}
