import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        // For class based components, need to get to props with this.props (compared to just props in a functional component)
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={ (e) =>  this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;