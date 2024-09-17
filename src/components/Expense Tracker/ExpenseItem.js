import React, { useContext, useState } from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { AppContext } from '../../context/AppContext';
import MyDatePicker from '../Expense Tracker/MyDatePicker';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState(props.name);
	const [cost, setCost] = useState(props.cost);
	const [date, setDate] = useState(props.date ? new Date(props.date) : null);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleEditExpense = () => {
		dispatch({
			type: 'EDIT_EXPENSE',
			payload: { id: props.id, name, cost: Number(cost), date: date.toISOString() },
		});
		handleClose();
	};

	// api calls to edit expense and delete expense

	const formattedDate = props.date ? new Date(props.date).toLocaleDateString() : 'No Date';

	return (
		<>
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<div className="d-flex justify-content-start flex-grow-1">
					<div className="expense-name mr-5">{props.name}</div> 
					<div className="expense-date mr-5">{formattedDate}</div> 
				</div>
				<div className="d-flex align-items-center">
					<span className="badge badge-primary badge-pill mr-3">&#8377;{props.cost}</span>
					<TiEdit className="mr-3" size="1.5em" onClick={handleShow} /> 
					<TiDelete size="1.5em" onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: props.id })} /> 
				</div>
			</li>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header >
					<Modal.Title>Edit Expense</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formExpenseName">
							<Form.Label>Item</Form.Label>
							<Form.Control
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formExpenseCost">
							<Form.Label>Cost</Form.Label>
							<Form.Control
								type="number"
								value={cost}
								onChange={(e) => setCost(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formExpenseDate">
							<Form.Label>Date</Form.Label>
							<MyDatePicker
								selected={date}
								onChange={(selectedDate) => setDate(selectedDate)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleEditExpense}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ExpenseItem;
