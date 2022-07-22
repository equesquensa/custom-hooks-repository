import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos'));
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	const handleTodo = (todo) => {
		const action = {
			type: '[ADD] add todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: '[ADD] delete todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleToggle = (id) => {
		const action = {
			type: '[ADD] toggle todo',
			payload: id,
		};

		dispatch(action);
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return {
		todos,
		handleDelete,
		handleTodo,
		handleToggle,
		todoCounter: todos.length,
		pendingTodosCounter: todos.filter((todo) => !todo.done).length,
	};
};
