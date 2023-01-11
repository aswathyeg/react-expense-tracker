import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddTransaction = () => {
  return (
    <div>
      <h5>Add New Transaction</h5>
      <Form className="expenseForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Text</Form.Label>
          <Form.Control type="email" placeholder="Enter text.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount (negative-Expense,positive-Income)</Form.Label>
          <Form.Control type="number" placeholder="Enter Amount" />
        </Form.Group>

        <Button className="addButton" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTransaction;
