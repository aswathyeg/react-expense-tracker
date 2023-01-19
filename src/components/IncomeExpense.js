import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    " $ " +
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

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((income) => income > 0)
    .reduce((acc, num) => (acc = +num), 0);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, num) => acc + num, 0) * -1;

  return (
    <div className="ieCard">
      <Card style={{ backgroundColor: "green" }}>
        Income {moneyFormatter(income)}
      </Card>
      <Card style={{ backgroundColor: "red" }}>
        Expense {moneyFormatter(expense)}
      </Card>
    </div>
  );
};

export default IncomeExpense;
