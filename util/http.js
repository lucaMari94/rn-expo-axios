import axios from "axios";

const BACKEND_URL = "https://test-app-20-422a0-default-rtdb.firebaseio.com/";

export const storeExpense = (espenseData) => {
    axios.post(BACKEND_URL + '/expenses.json', espenseData);
}