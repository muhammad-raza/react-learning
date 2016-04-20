import React from 'react';
import ReactDOM from 'react-dom';
import Board from './js/board'

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