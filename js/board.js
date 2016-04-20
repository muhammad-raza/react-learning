import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {noteArr: []};
		this.remove = this.remove.bind(this);
		this.add = this.add.bind(this);
		this.eachNote = this.eachNote.bind(this);
	}
	remove(index) {
		var arr = this.state.noteArr;
		arr.splice(arr.indexOf(index), 1);
		this.setState({noteArr: arr});
	}
	add() {
		var arr = this.state.noteArr;
		arr.push(Math.floor((Math.random() * 10000) + 1));
		this.setState({noteArr: arr});
	}
	eachNote(val, i) {
		return (<Note key={val} 
			value={val} 
			onRemove={this.remove}/>);	
	}
	render() {
		return (<div className="board">				
			<div onClick={this.add} className="add"></div>	
			{this.state.noteArr.map(this.eachNote)}            		 		
		</div>);			
	}
}

export default Board;

