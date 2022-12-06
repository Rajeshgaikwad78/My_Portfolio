import React,{useState} from "react";
//import { Color } from "three";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        //setIsEditing(true);
    }
    const startEditingHandler = ()=>{
        setIsEditing(true)
    }
    const stopEditing = ()=>{
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
            {!isEditing && <button onClick={ startEditingHandler }>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
        
    )
}

export default NewExpense;