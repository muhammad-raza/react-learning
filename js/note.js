import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component{		
	constructor(){
		super();
		this.remove = this.remove.bind(this);
	}
	remove() {
		this.props.remove(this.props.value);
	}
	render() {
		return (<div className="note">
			<input className="inputText" placeholder="add todo" type="text" ></input>			
			<div ref="note" id={this.props.value} onClick={this.remove} className="deleteNote">Remove Note</div>			
		</div>);		
	}
}

export default Note;
// jsx spread syntax


