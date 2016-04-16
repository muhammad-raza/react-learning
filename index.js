import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
	render: () => {
		return <div>
			<h1>Hello World</h1>
		</div>;
	}
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));