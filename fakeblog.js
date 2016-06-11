var navbar = document.getElementById('navbar');
var sidenav = document.getElementById('sidenav');

var headerComponent = React.createClass({
	render: function() {
		return React.createElement('header', null,
			React.createElement('ul', { style: { listStyleType: 'none' } }, 
				React.createElement('li', { style: { display: 'inline-block', padding: '10px' } }, 
					React.createElement('a', { href: 'javascript: void(0)' }, this.props.text[0])
				),
				React.createElement('li', { style: { display: 'inline-block', padding: '10px' } }, 
					React.createElement('a', { href: 'javascript: void(0)' }, this.props.text[1])
				),
				React.createElement('li', { style: { display: 'inline-block', padding: '10px' } }, 
					React.createElement('a', { href: 'javascript: void(0)' }, this.props.text[2])
				)
			)
		);
	}
});

var sideBarComponent = React.createClass({
	render: function() {
		return React.createElement('aside', null, 
			React.createElement('ul', { style: { listStyleType: 'none' } }, 
				React.createElement('li', null, 'Hello'),
				React.createElement('li', null, 'Hello'),
				React.createElement('li', null, 'Hello')
			),
			React.createElement('form', null, 
				React.createElement('label', null, 'Name:'),
				React.createElement('input', { type: 'text' }),
				React.createElement('label', null, 'Email:'),
				React.createElement('input', { type: 'email' }),
				React.createElement('button', { type: 'submit' }, 'Submit')
			)
		);
	}
});

var mainContent = React.createClass({
	render: function() {
		return React.createElement('main', null,
			React.createElement('h1', null, 'Hello there', 
				React.createElement('p', null, 'What is up?')
			),
			React.createElement('h1', null, 'How are you'),
			React.createElement('h1', { style: { color: 'green' } }, 'I like green eggs and ham')
		);
	}
});

var footerComponent = React.createClass({
	render: function() {
		return React.createElement('footer', null,
			React.createElement('p', null, 'Copyright 2016')
		);
	}
});

var header = React.createElement(headerComponent, {text: ['Home', 'About', 'Tech']});
var sidebar = React.createElement(sideBarComponent, null);
var main = React.createElement(mainContent, null);
var footer = React.createElement(footerComponent, null);

ReactDOM.render(header, navbar);
ReactDOM.render(sidebar, sidenav);
ReactDOM.render(main, document.getElementById('app'));
ReactDOM.render(footer, document.getElementById('footing'));