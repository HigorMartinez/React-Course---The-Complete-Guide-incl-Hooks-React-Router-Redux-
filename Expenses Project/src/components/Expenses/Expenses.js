import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');


  const expensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} expensesFilter={expensesFilterHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;