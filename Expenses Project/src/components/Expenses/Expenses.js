import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');


  const expensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
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
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;