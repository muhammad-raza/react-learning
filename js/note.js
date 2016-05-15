import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import * as noteActions from './action/noteActionCreator'

class Note extends React.Component{		
	constructor(){
		super();		
	}
	addTodo(evt) {
		if(evt.keycode === 13) {
			this.props.addTodo();
		}
	}
	eachTodo(note, i) {		
		return (<li key={i} 
			/>);	
	}	
	removeNote() {
		this.props.removeNote();
	}	
	render() {				
		return (<div className="note">
			<input className="inputText" placeholder="add todo" type="text" onKeyDown={this.addTodo}></input>			
			<ul>{this.props.todos.map(this.eachTodo)}</ul>
			<div id={this.props.note.id} onClick={this.removeNote.bind(this)} className="deleteNote">Remove Note</div>			
		</div>);		
	}
}

let getTodos = (notes, id) => {
	return [];
}

let mapStateToProps = (state, ownProps) => {		
	return {
		todos: getTodos(state.boardReducer.notes, ownProps.note.id)
	};
}

let mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addTodo: dispatch(noteActions.addTodo()),
		removeNote: () => dispatch(noteActions.removeNote(ownProps.note.id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);


