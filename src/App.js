import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";
import TacoCard from "./components/TacoCard";
import Confirmation from "./components/Confirmation";
import tacos from "./data";

function App() {
  const [ordered, setOrdered] = useState(false);

  const displayConfirmation = () => {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {tacos.map((data) => (
            <Col xs={3} className="mb=5" key={`$data.id`}>
              <TacoCard data={data} setOrdered={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
