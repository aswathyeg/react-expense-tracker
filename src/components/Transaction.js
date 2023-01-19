import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
function convertMoney(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <ListGroup.Item className={transaction.amount < 0 ? "minus" : "plus"}>
      {/* <li className={transaction.amount > 0 ? "plus" : "minus"}> */}
      {transaction.text}
      <span>
        {sign}
        {convertMoney(transaction.amount)}
      </span>{" "}
      <Button onClick={() => deleteTransaction(transaction.id)}>x</Button>
    </ListGroup.Item>
  );
};

// export default Transaction;
