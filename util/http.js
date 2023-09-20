import axios from "axios";
const BACKEND_URL = "https://test-app-20-422a0-default-rtdb.firebaseio.com/"

export const storeExpense = (expenseData) => {
    axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export const fetchExpenses = async () => {
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    const expenses = [];
    // console.log(response.data);
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
        expenses.push(expenseObj);
    }
    // console.log(expenses);
    return expenses;
}
