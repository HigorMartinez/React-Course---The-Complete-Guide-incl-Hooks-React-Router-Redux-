import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');


  const expensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No express found!</p>;

  // if (filteredItems.length > 0) {
  //   expensesContent = filteredItems.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} expensesFilter={expensesFilterHandler} />
      {/* {expensesContent} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;