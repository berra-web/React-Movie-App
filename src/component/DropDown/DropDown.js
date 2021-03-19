import React, { Component } from 'react'

export default class DropDown extends Component {
    constructor(props) {
		super(props);

		this.state = { 
			type: this.props.movies
	    };
	}

	onDropDownSearch(type) {
		this.props.dropDownSearch(type);
		this.setState({
			type: this.props.movies
		});
	}

	render() {
		return (
			<>
			<div className="search-bar">
					<select className='select'
					value = {this.state.type}
					onChange={event => this.onDropDownSearch(event.target.value)}>
                        <option value="movie">Movies</option>
                        <option value="series">Series</option>
                        <option value="Episode">Episodes</option>
                    </select>
			</div>
			</>
		);
	}
}
