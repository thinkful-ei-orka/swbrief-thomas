import React from 'react';
import { Link } from 'react-router-dom'
import SWContext from '../SW-Context/SWContext';
import SWPersonList from './SWPersonList';
import PropTypes from 'prop-types';
import './SWList.css';

class SWList extends React.Component {
    static contextType = SWContext;

    render() {
        let castList = [];

        if (typeof this.context.people === 'undefined')
        return <p>Loading</p>

        castList = this.context.people.map((person, index) => {
            return (
                <Link key={index} to={`/people/${index}`}>
                    <SWPersonList key={index} personName={person.name} />
                </Link>
            )
        })

        return (
            <div className='person-list'>
                {castList}
            </div>
            
        )
    }
}

SWList.propTypes = {
    history: PropTypes.object.isRequired,
    personName: PropTypes.string,
  }

export default SWList;