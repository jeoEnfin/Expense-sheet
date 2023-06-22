import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleInputHandler = (event) => {
        setNewTitle(event.target.value);
    };
    const amountInputHandler = (event) => {
        setNewAmount(event.target.value);
    };
    const dateInputHandler = (event) => {
        setNewDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        }
        props.onExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleInputHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={newAmount} onChange={amountInputHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="date" min="2023-01-01" max="2026-01-01" value={newDate} onChange={dateInputHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.cancelForm}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;