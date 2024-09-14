import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { AppProvider } from './context/AppContext';
import Budget from './components/Expense Tracker/Budget';
import ExpenseTotal from './components/Expense Tracker/ExpenseTotal';
import ExpenseList from './components/Expense Tracker/ExpenseList';
import AddExpenseForm from './components/Expense Tracker/AddExpenseForm';
import RemainingBudget from './components/Expense Tracker/Remaining';
import Title from './components/Expense Tracker/Title';
import Login from './components/Login/Login'; 
import SignUp from './components/Login/SignUp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? (
              <div className='main-content'>
                <Title />
                <h1 className='mt-3'>Track My Expense</h1>
                <div className='row mt-3'>
                  <div className='col-sm'>
                    <Budget />
                  </div>
                  <div className='col-sm'>
                    <RemainingBudget />
                  </div>
                  <div className='col-sm'>
                    <ExpenseTotal />
                  </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                  <div className='col-sm'>
                    <AddExpenseForm />
                  </div>
                </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row'>
                  <div className='col-sm'>
                    <ExpenseList />
                  </div>
                </div>
              </div>
            ) : (
              <Login onLogin={handleLogin} />
            )}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
