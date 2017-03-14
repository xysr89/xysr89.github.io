import React from 'react';

export default class DeleteToDo extends React.Component {
	render() {
		return  (
			<form onSubmit={this.handleDelete.bind(this)}>
				<input type="text" placeholder="what do i need to do?"
					ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		this.props.createTask(this.refs.createInput.value);
		this.refs.createInput.value = '';
	}
}
