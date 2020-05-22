import React from 'react';
import { Link } from 'react-router-dom'
import SWContext from '../SW-Context/SWContext';
import SWPersonList from './SWPersonList';
import './SWList.css';

class SWList extends React.Component {
    static contextType = SWContext;

    render() {
        let castList = [];
        console.log(this.props);

        if (typeof this.context.people === 'undefined')
        return <p>Loading</p>

        console.log(this.context.people);

        castList = this.context.people.map((person, index) => {
            return (
                <Link key={index} to={`/people/${index}`}>
                    <SWPersonList key={index} personName={person.name} pictureUrl={person.url} />
                </Link>
            )
        })
    

        console.log(castList);

        return (
            <div className='person-list'>
                {castList}
            </div>
            
        )
    }
}

export default SWList;