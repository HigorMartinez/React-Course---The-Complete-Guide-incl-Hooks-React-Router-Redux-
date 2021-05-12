import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');


  const expensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  const items = [...props.items];

  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} expensesFilter={expensesFilterHandler} />
      {filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;