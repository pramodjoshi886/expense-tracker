import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import MyDatePicker from './MyDatePicker';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [date, setDate] = useState(null);
	const [error, setError] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		if (!name || !cost || !date) {
			setError('All fields are required');
			return;
		  }

		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
			date: date ? date.toString():'',
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
		setDate(null);
		setError('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Item</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='date'>Date</label>
					<MyDatePicker
						required
						className='form-control'
						id='date'
						selected={date}
						onChange={(selectedDate) => setDate(selectedDate)}
					/>
       			</div>
			</div>
			{error && <div className='alert alert-danger mt-3'>{error}</div>}
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;