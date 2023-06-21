import React from 'react'

import ExpenceItem from './ExpenceItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.Expenses.length === 0){
        return(<h2 className='expenses-list__fallback'>Found no data</h2>)
    }

    return (
        <ul className='expenses-list'>
            {props.Expenses.map((expense)=> (<ExpenceItem key={expense.id} expenses={expense}/>))}
        </ul>
    );
}

export default ExpensesList;
