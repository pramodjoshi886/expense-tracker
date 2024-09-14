import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
        case 'EDIT_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                expense.id === action.payload.id
                ? { 
					...expense,
					name: action.payload.name, 
					cost: action.payload.cost,
					date: action.payload.date
				 }
                : expense
    ),
            };
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const initialState = {
	budget: 0,
	expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};