import React from 'react';
import SWContext from '../SW-Context/SWContext';
import './SWDetails.css';

class SWDetails extends React.Component {
    static contextType = SWContext;


    render() {
        let index = parseInt(this.props.match.params.peopleId)
        let person = this.context.people[index];
        
        //if (!person)
        //return <p>There's nothign here!</p>

        return (
            <div className="person-details">
                <h2>{person.name}</h2>
                <p>Born: {person.birth_year}</p>
                <div className="bio-details">
                    <p>Gender: {person.gender}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Height: {person.height}cm</p>
                    <p>Weight: {person.mass}kg</p>
                    <p>Skin Color: {person.skin_color}</p>
                </div>
                <button onClick={() => this.props.history.goBack()}>Go back</button>
            </div>
        )
    }
}

export default SWDetails;