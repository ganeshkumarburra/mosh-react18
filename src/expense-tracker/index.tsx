import { FieldValues } from "react-hook-form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import { SELECT_CATEGORY_OPTIONS } from "./constants";
import ExpenseForm from "./components/ExpenseForm";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
const ExpenseTracker = () => {
  const onSubmit = (data: FieldValues) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 } as Expense]);
  };

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof SELECT_CATEGORY_OPTIONS)[number]
  >(SELECT_CATEGORY_OPTIONS[0]);

  const visibleExpenses = expenses.filter((item) => {
    if (selectedCategory === SELECT_CATEGORY_OPTIONS[0]) return item;
    if (selectedCategory === item.category) return item;
  });

  const handleDeleteItem = (id : number) => {
    setExpenses(
      expenses.filter((expense) => {
        if ( expense.id !== id) return expense;
      })
    );
  };

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} />

      <ExpenseFilter
        onChangeCategory={(selectedCategory) => {
          setSelectedCategory(selectedCategory);
        }}
      />

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={handleDeleteItem}
      />
    </div>
  );
};

export default ExpenseTracker;
