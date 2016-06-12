import React from 'react';
import ReactDOM from 'react-dom';

var CheckerBoard = (props) => {
	return (
		<div className="container">
			{
				props.rows.map(function(row) {
					return <Row key={row} cells={props.cells} row={row} colors={props.colors}></Row>
				})
			}
		</div>
	);
};

var Row = (props) => {
	{
		var numCells = props.rows;
		var cells = [];
		for (var i = 0; i < numCells; i++) {
			cells.push(i);
		}
	}
	return (
		<div className="checker-row">
			{
				props.cells.map(function(cell) {
					if (props.row % 2 === 0) {
						return <Cell key={cell} cellColor={ cell % 2 === 0 ? {backgroundColor: props.colors.first} : {backgroundColor: props.colors.second} }></Cell>
					}
					return <Cell key={cell} cellColor={ cell % 2 === 0 ? {backgroundColor: props.colors.second} : {backgroundColor: props.colors.first} }></Cell>
				})
			}
		</div>
	);
};

var Cell = (props) => {
	return (
		<div className="checker-cell" style={props.cellColor}></div>
	);
};

const App = () => {
	{
		var numRows = prompt('How many rows would you like?');
		var color1 = prompt('Pick one color.');
		var color2 = prompt('Pick another color.');
		var rows = [];
		for (var i = 0; i < numRows; i++) {
			rows.push(i);
		}
		var cells = rows;
	}
	return React.createElement(CheckerBoard, { rows: rows, cells: cells, colors: { first: color1, second: color2 } });
};

ReactDOM.render(<App />, document.querySelector('#app'));

