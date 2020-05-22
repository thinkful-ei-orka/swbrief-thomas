import React from 'react';
import './SWBody.css';

class SWBody extends React.Component {
    render() {
        return (
            <div className='body'>
                {this.props.children}
            </div>
        )
    }
}

export default SWBody;