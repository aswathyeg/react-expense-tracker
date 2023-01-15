import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ExpenseContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(ExpenseContext);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransation = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransation);
  };
  return (
    <div>
      <h5>Add New Transaction</h5>
      <Form className="expenseForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text.."
            value={text}
            onChange={handleText}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount (negative-Expense,positive-Income)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleAmount}
          />
        </Form.Group>

        <Button className="addButton" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTransaction;
