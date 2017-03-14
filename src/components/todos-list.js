import React from 'react';
import ToDosListHeader from './todos-list-header';
import _ from 'lodash';
import TodosListItem from './todos-list-item';

export default class ToDosList extends React.Component {
	renderItems() {

		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
		} {...todo} {...props}/>);
	}

	render() {
		return  (
			<table>
				<ToDosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}
