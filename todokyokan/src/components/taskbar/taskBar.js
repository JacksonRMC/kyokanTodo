import React from 'react';

export default class Taskbar extends React.Component{

	render(){
		return(
			<div>
				<input type="text" ref="task" placeholder="add tasks here" />
				<button> Add Tasks </button>
			</div>
		);
	}
}