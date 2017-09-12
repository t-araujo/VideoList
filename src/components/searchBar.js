import React, { Component } from 'react';

//functional Component 
// const SearchBar = () => {
//     return <input />;
// };
// event handlers is to monitoring some events made by user

//React base component class
class SearchBar extends Component {
    // é chamada com o component
    constructor(props){
        // calling parent constructor
        super(props);

        //initialize variables like state
        // all we need to record on state
        this.state = { term: '' };
    }

    render() {
        // added event handler
        // we can find more info about other events in the react docs
        return (
        <div className="search-bar">
            <input 
            value= { this.state.term }
            onChange={ event => this.onInputChange( event.target.value )} 
            />;
        </div>
        );
    };

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    };
};

export default SearchBar;

// React state
// Is a plane javascript object that is used to record and react to user events
// each class based components statements of react have their owns state object, when the state change the component rerenders and the childrens to
// 