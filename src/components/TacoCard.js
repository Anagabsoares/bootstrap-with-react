import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge, Button } from "react-bootstrap";

const TacoCard = ({ setOrdered, data }) => {
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variante="top" className="img-size" src={data.image}></Card.Img>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
          <Badge pill className="mb-3" bg="warning">
            ${data.price}
          </Badge>
        </div>
        <Card.Text className="text-secondary">{data.desc}</Card.Text>
        <Button
          onClick={() => setOrdered()}
          variant="success"
          className="mt-auto font-weight-bold"
          block
        >
          Order Taco
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TacoCard;
