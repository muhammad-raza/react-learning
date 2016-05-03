import React from 'react';
import ReactDOM from 'react-dom';
import Board from './js/board';
import { Provider } from 'react-redux';
import { createStore } from'redux';
import boardReducer from './js/reducers/boardReducer';

let Header = React.createClass({
	render: function() {
		return (<div className="header">
			This is a header			
		</div>);		
	}
});

let Footer = React.createClass({
	render: function() {
		return (<div className="footer">
			This is a footer			
		</div>);		
	}
});

let All = React.createClass({
	render: function() {
		return <div>
			<Header />
			<Board />
			<Footer />
		</div>
	}
});

let store = createStore(boardReducer);

let App = React.createClass({	
	render: function() {
		return <Provider store={store}>
			<All/>
			</Provider>;		
	}
});



ReactDOM.render(<App></App>, document.getElementById('app'));