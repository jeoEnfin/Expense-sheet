
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';

function Expenses(props) {
    const [filterYear, seFilterYear] = useState('2023');

    const filterExpenseYear = selectedYear => {
        seFilterYear(selectedYear);
    };
    const filteredExpenses = props.expense.filter(Expense =>{
    return Expense.date.getFullYear().toString() === filterYear;
    });
    
    return (
        <div className='expenses'>
            <ExpensesFilter selected={filterYear} onFilterChange={filterExpenseYear} />
            <ExpensesList Expenses={filteredExpenses}/>
        </div>
    );
}
export default Expenses;