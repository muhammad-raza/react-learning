import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note';
import { connect } from 'react-redux'
import * as boardActions from './action/boardActionCreator'

class Board extends React.Component {
	constructor() {
		super();
		this.eachNote = this.eachNote.bind(this);		
	}

	eachNote(note, i) {		
		return (<Note key={note.id} 
			value={note}/>);	
	}
	
	render() {		
		return (<div className="board">				
			<div onClick={this.props.onAdd} className="addNote">Add</div>	
			<ul>{this.props.notes.map(this.eachNote)}</ul>	
		</div>);			
	}
}

let mapStateToProps = (state) => {
	return {
		notes: state.notes
	}
}

let mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onAdd: ()=>{
			dispatch(boardActions.addNote());
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

