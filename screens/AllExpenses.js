import { useContext, useEffect } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpenses } from '../util/http';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect( () => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      console.log(expenses)
      // setFetchedExpenses(expenses);
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, [])

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
