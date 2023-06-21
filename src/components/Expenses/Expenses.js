import ExpenceItem from './ExpenceItem';
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filterYear,seFilterYear] = useState('');

    const filterExpenseYear = selectedYear => {
        seFilterYear(selectedYear);
    }
    return (
        <div className='expenses'>
            <div>
                <ExpensesFilter onFilterChange={filterExpenseYear}/>
            </div>
            <ExpenceItem expenses={props.expense[0]} />
            <ExpenceItem expenses={props.expense[1]} />
            <ExpenceItem expenses={props.expense[2]} />
            <ExpenceItem expenses={props.expense[3]} />
        </div>
    );
}
export default Expenses;