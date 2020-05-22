import React from 'react';

const SWContext = React.createContext();
export default SWContext;

export class SWContextProvider extends React.Component {
    state = {
        people: [],
        loading: false
    }

    componentDidMount = () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => { return response.json() })
            .then(people => { 
                console.log(people);
                this.setState({ people: people.results }) })
            .catch(error => { return error.message });
    }

    searchPeople = (name) => {
        fetch(`https://swapi.dev/api/people/?search=${name}`)
            .then(response => { return response.json() })
            .then(people => { 
                console.log(people);
                this.setState({ people: people.results }) })
            .catch(error => { return error.message });
    }

    render() {
        return (
            <SWContext.Provider value={{
                people: this.state.people,
                searchPeople: this.searchPeople
            }}>
                {this.props.children}
            </SWContext.Provider>
        )
    }
};