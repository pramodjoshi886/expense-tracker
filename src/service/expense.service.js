import axios from 'axios';
import { EXPENSE_SERVICE_DELETE_URL, EXPENSE_SERVICE_UPDATE_URL, EXPENSE_SERVICE_ADD_URL, EXPENSE_SERVICE_GET_URL } from "../service/API_URL";

export const getExistingExpenses = async()=>{
    try{
    const response = await axios({
                    method: 'GET',
                    url: EXPENSE_SERVICE_GET_URL,
                    headers: {
                        userId: sessionStorage.getItem('userId'),
                    }
                });
                console.log('Existing expenses',response)
                return response;
        }
        catch(e){
            return e;
        }
        }

export const addExpense  = async(expense)=>{
    try{
        let config = {
            headers: {
              userId: sessionStorage.getItem('userId'),
            }
          }
    const response = await axios
    .post(EXPENSE_SERVICE_ADD_URL,expense,config);
    console.log('Expense added successfully',response)
    return response;
}catch(e){
    return e;
}
} 

export const updateExpense  = async(expense)=>{
    try{
        let config = {
            headers: {
              userId: sessionStorage.getItem('userId'),
            }
          }
    const response = await axios
    .post(EXPENSE_SERVICE_ADD_URL,expense,config);
    console.log('Expense added successfully',response)
    return response;
}catch(e){
    return e;
}
} 

export const deleteExpense = async(expenseId)=>{

    try{
        const response = await axios.delete(`${EXPENSE_SERVICE_DELETE_URL}/${expenseId}`);
        console.log('Delete successful for id -',expenseId)
        return response;
    }catch(e){
        return e;
    }
}