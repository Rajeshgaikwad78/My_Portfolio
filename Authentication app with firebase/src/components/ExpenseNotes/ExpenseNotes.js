
 import React,{useState} from 'react';
 import Expenses from '../Expenses/Expenses';
 import NewExpense from '../NewExpense/NewExpense';

const DUMMY_EXPENSES =[
  {
    id:1,
    title:'history Books',
    amount:294.66,
    date: new Date(2022, 2,28)
  },
  {
    id:2,
    title:'history Books',
    amount:294.66,
    date: new Date(2022, 2,28)
  },
  {
    id:3,
    title:'Clothes',
    amount:294.66,
    date: new Date(2021, 2,28)
  },
  {
    id:4,
    title:'history Books',
    amount:294.66,
    date: new Date(2020, 2,28)
  },
  {
    id:5,
    title:'Toilet paper',
    amount:294.66,
    date: new Date(2022, 2,28)
  }
]
const  ExpenseNote =()=> {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }
  return (
    // <Card className="expenses">
    //         <ExpenseItem
    //   title={expenses[0].title}
    //   amount={expenses[0].amount}
    //   date={expenses[0].date} />
      
    //   <ExpenseItem
    //     title={expenses[1].title}
    //     amount={expenses[1].amount}
    //     date={expenses[1].date} />
    //     </Card>
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
    
  );
}

export default ExpenseNote;
