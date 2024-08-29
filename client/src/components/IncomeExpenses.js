import React, { useContext } from "react";
import { GlobalContext } from "../context/GLobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
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

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className="inc-exp-container">
      <div className="money plus">
        <h4>Income</h4>
        <p>{moneyFormatter(income)}</p>
      </div>
      <div className="money minus">
        <h4>Expense</h4>
        <p>{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
