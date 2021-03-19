import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			query: 'batman',
			error: ''
	    };
	}

	onInputChange(query) {
    		this.props.onSearchTermChange(query);
    		this.setState({
    			query
    		})

    		if(this.state.query.length < 2 ){
    		 this.setState(state => {
    			return {
    				...state, error: "Too many results" 
    			}
    		})
    	}else{
			this.setState({
				error: ""
			  });
		}
    }

	render() {
		return (
			<>
			<div className="bar">
			<input
			    value = {this.state.query}
				onChange={event => this.onInputChange(event.target.value)}
				placeholder="Search" />
			</div>
				<p className="error">{this.state.error ? this.state.error : ""}</p>
				</>
		);
	}
}

export default SearchBar;

