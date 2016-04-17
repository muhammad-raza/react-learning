import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
	render: function() {
		return (<div className="header">
			This is a header			
		</div>);		
	}
});

var Footer = React.createClass({
	render: function() {
		return (<div className="footer">
			This is a footer			
		</div>);		
	}
});

var Main = React.createClass({	
	render: function() {
		return (<div className="body">	
		</div>);		
	}
});

var Note = React.createClass({	
	remove: function(){
		this.refs.note.getDOMNode
	},
	render: function() {
		return (<div className="note">
			<div>This is a Note</div>
			<div ref="note" onClick={this.remove} className="delete"></div>			
		</div>);		
	}
});

var Board = React.createClass({	
	getInitialState: function() {
		return {count: 4}
	},
	getNotes: function(){
		var notes = [];
		for (var i=0; i < this.state.count; i++) {
			notes.push(<Note key={i}/>);        	
    	} 
    	return notes;
		
	},
	render: function() {
		return (<div className="board">		
			{this.getNotes().map(function(note){
				return note
			})}            		 		
		</div>);		
	}
});


var App = React.createClass({
	render: function() {
		return <div>
			<Header />
			{this.props.children}
			<Footer />
			</div>;		
	}
});



ReactDOM.render(<App><Board /></App>, document.getElementById('app'));