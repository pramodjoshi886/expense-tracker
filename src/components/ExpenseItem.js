import React, { useContext } from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

    const handleEditExpense = () => {
		const newName = prompt('Enter new name:', props.name);
        const newCost = prompt('Enter new cost:', props.cost);
        if (newName && newCost) {
            dispatch({
            type: 'EDIT_EXPENSE',
            payload: { id: props.id, name: newName, cost: Number(newCost) },
            });
        }
	};


	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>&#8377;{props.cost}</span>
                <TiEdit size='1.5em' onClick={handleEditExpense} />
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;