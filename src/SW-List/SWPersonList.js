import React from 'react';
import './SWPersonList.css';

class SWPersonList extends React.Component {


    render () {
        return (
                <div className="person-list-box">
                    <h2>{this.props.personName}</h2>
                </div>
        )
    }
}

export default SWPersonList;