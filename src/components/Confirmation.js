import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "react-bootstrap";

const Confirmation = ({ toggle }) => {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your order is being prepared</strong>
        <small className="text-muted">just now</small>
      </Toast.Header>
      <Toast.Body>
        Your delicious tacos will be with you in 45min!! hold tight!
      </Toast.Body>
    </Toast>
  );
};

export default Confirmation;
