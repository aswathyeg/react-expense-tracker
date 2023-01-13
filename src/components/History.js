import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const History = () => {
  return (
    <div className="expenseList">
      {" "}
      <ListGroup variant="flush">
        <h5>History</h5>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default History;
