import React from 'react';
import ReactDOM from 'react-dom';

var CheckerBoard = (props) => {
	return (
		<div className="container">
			{
				props.rows.map(function(row) {
					return <Row key={row} cells={props.cells} row={row}></Row>
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
						return <Cell key={cell} cellClass={ cell % 2 === 0 ? 'checker-cell red' : 'checker-cell black' }></Cell>
					}

					return <Cell key={cell} cellClass={ cell % 2 === 0 ? 'checker-cell black' : 'checker-cell red' }></Cell>
				})
			}
		</div>
	);
};

var Cell = (props) => {
	return (
		<div className={props.cellClass}></div>
	);
};

const App = () => {
	{
		var numRows = prompt('How many rows would you like?');
		var rows = [];
		for (var i = 0; i < numRows; i++) {
			rows.push(i);
		}
		var cells = rows;
	}
	return React.createElement(CheckerBoard, { rows: rows, cells: cells });
};

ReactDOM.render(<App />, document.querySelector('#app'));

