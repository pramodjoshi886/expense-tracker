import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

    console.log(expenses,'***expenses*** ')
	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Spent so far: &#8377;{total}</span>
		</div>
	);
};

export default ExpenseTotal;