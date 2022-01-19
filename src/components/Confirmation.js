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
        Your delicious tacos will be ready for pick-up in 45 min
      </Toast.Body>
    </Toast>
  );
};

export default Confirmation;
