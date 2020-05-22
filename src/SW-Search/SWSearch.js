import React from 'react';
import SWContext from '../SW-Context/SWContext'
import './SWSearch.css'

class SWSearch extends React.Component {
    static contextType = SWContext;

    state = {
        searchValue: '',
        errorFlag: false
    }

    validateSearchName = () => {
        let searchName = this.state.searchValue;

        if (searchName.length < 3) { return 'Please provide a name at least 3 letters long.'; }
        return '';
    }

    buttonSubmit = (event) => {
        event.preventDefault();
        if (this.validateSearchName()) {
            this.setState({
                errorFlag: true
            })
        } else {
            let name = this.state.searchValue;
            this.context.searchPeople(name);
            this.props.history.push(`/search/${name}`)
            this.setState({
                searchValue: '',
                errorFlag: false
            })
        }
    }

    setName = (value) => {
        this.setState({ searchValue: value });
    }

    render() {
        return (
            <form onSubmit={(e) => this.buttonSubmit(e)}>
                <label htmlFor="name">Character Search </label>
                <input type="text" name="name" id="name"
                    value={this.state.searchValue}
                    onChange={e => this.setName(e.target.value)}></input>
                <button className='submit-button' type="Submit">Submit</button>
                {this.state.errorFlag &&
                    <p className="error-message">{this.validateSearchName()}</p>}
            </form>
        )
    }
}

export default SWSearch;