import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const History = () => {
  const { transactions } = useContext(GlobalContext);
  //console.log(transactions);
  return (
    // <div className="expenseList">
    //   {" "}
    <>
      <h5>History</h5>
      <ListGroup variant="flush">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </>
    // </div>
  );
};
