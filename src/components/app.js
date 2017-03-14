import React from 'react';
import ToDosList from './todos-list';
import CreateToDo from './create-todo';

const todos = [];



export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}

	render() {
		return  (
			<div>
				<h1>React ToDos App</h1>
				<CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
				<ToDosList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}


	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		})

		this.setState({ todos: this.state.todos});
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });
	}

	deleteTask(task) {
		_.remove(this.state.todos, todo => todo.task === task);
		this.setState({ todos: this.state.todos});
	}
}

