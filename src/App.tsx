import ExpenseList from "./components/expenseList";
import AddExpense from "./components/addExpense";
import Header from "./components/header";
import { useEffect, useState } from "react";
import type { expense } from "./types";

function App() {
  const [expenses, setExpenses] = useState<expense[]>([]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:4000/expenses");
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <Header />
      <AddExpense onUpdate={fetchExpenses} />
      <ExpenseList expenses={expenses} onReset={fetchExpenses} />
    </>
  );
}

export default App;

{
  /* import {
  Counter,
  Counter2,
  LiveTextDisplay,
  ToggleVisibility,
  ColorChanger,
} from "./components/UseState";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; */
}

/* 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/LiveTextDisplay" element={<LiveTextDisplay />} />
        <Route path="/ToggleVisibility" element={<ToggleVisibility />} />
        <Route path="/ColorChanger" element={<ColorChanger />} />
      </Routes>
      */
