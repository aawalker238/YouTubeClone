import React, { Component } from "react";


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ""};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div>
                <div className="search-bar">
                    <img id="logo" src="../../img/YouTube-logo-full_color.png" /><input 
                        placeholder="Search"
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} /><br />
                        <p>{this.state.term}</p>
                </div>
            </div>
        );
    }
}

export default SearchBar;