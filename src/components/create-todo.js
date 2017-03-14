import React from 'react';

export default class CreateToDo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}

	renderError() {
		if (!this.state.error) {
			return null;
		}
		return <div style={{ color: 'red'}}>{this.state.error}</div>;
	}

	render() {
		return  (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do i need to do?"
					ref="createInput"/>
				<button>Create</button>
				{this.renderError()}
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;

		const errorMsg = this.validateTask(task);
		if (errorMsg) {
			this.setState({ error: errorMsg});
			return;
		}

		this.setState({ error: null });
		this.props.createTask(task);
		this.refs.createInput.value = '';
	}

	validateTask(task) {
		if (!task) {
			return "Please enter a valid task.";
		} else if (_.find(this.props.todos, todo => todo.task === task)) {
			return "The task already exists";
		} else {
			return null;
		}
	}
}
