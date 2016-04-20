import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component{		
	constructor(){
		super();
		this.remove = this.remove.bind(this);
	}
	remove() {
		this.props.onRemove(this.props.value);
	}
	render() {
		return (<div className="note">
			<div>This is a Note</div>			
			<div ref="note" id={this.props.value} onClick={this.remove} className="delete"></div>			
		</div>);		
	}
}

export default Note;
// jsx spread syntax


