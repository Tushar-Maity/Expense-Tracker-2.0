import React, { useState } from 'react';
import Expenses from './Expenses';

import './styles/app.scss';

const dummy_Expenses = [
  {
    id: 'e1',
    title: 'Car',
    amount: 550.60,
    date: new Date(2019, 7, 18)
  },
  {
    id: 'e1',
    title: 'Car',
    amount: 550.60,
    date: new Date(2019, 7, 18)
  },
  {
    id: 'e1',
    title: 'Car',
    amount: 550.60,
    date: new Date(2019, 7, 18)
  },
  {
    id: 'e1',
    title: 'Car',
    amount: 550.60,
    date: new Date(2019, 7, 18)
  },
];

function App() {

  const [espensesData, setExpensesData] = useState(dummy_Expenses);
  return (
    <div className="app">
        <Expenses expensesData={espensesData}/>
    </div>
  );
}

export default App;
