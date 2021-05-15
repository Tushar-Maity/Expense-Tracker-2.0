import React from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ title, amount, date }) => {
    return (
        <div className="expense__item">
            <ExpenseDate date={date}/>
            <div className="expense__item__description">
                <h2>{title}</h2>
                <div className="expense__item__price">${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
