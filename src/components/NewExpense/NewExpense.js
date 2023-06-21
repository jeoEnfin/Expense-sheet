import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [enterForm,setEnterForm] = useState(false)
     
    const expenseDataHandler = expenseData =>{
        const ExpenceData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onNewExpense(ExpenceData);
    }

    const addExpenseForm =()=>{
        setEnterForm(true);
    }

    const removeExpenseForm =()=>{
        setEnterForm(false);
    }


    return (
        <div className='new-expense '>
            {!enterForm && <button onClick={addExpenseForm}>Add Expense</button>}
            {enterForm && <ExpenseForm  cancelForm={removeExpenseForm} onExpenseData={expenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;