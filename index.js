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
		this.props.onRemove(this.props.value);
	},
	render: function() {
		return (<div className="note">
			<div>This is a Note</div>
			<div ref="note" id={this.props.value} onClick={this.remove} className="delete"></div>			
		</div>);		
	}
});

var Board = React.createClass({	
	getInitialState: function() {
		return {noteArr: []}
	},
	remove: function(index) {
		var arr = this.state.noteArr;
		arr.splice(arr.indexOf(index), 1);
		this.setState({noteArr: arr});
	},
	add: function() {
		var arr = this.state.noteArr;
		arr.push(Math.floor((Math.random() * 10000) + 1));
		this.setState({noteArr: arr});
	},
	eachNote: function(val, i){
		return (<Note key={val} 
				value={val} 
				onRemove={this.remove}/>);
	},
	render: function() {
		{console.log(this.state.noteArr);}
		return (<div className="board">	
			<div onClick={this.add} className="add"></div>	
			{this.state.noteArr.map(this.eachNote)}            		 		
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