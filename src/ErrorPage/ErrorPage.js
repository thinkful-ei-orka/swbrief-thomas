import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        return {error};
    }
    
    render() {
        // If there was an error, show an error page
        if (this.state.error) {
            return (
                <main className="error-page">
                    <h1>Hey, something has gone wrong with this application.</h1>
                    <p>Please Return to the main page <Link to='/'>Here</Link>.</p>
                </main>
            );
        }
        // Otherwise, render the children
        return this.props.children;
    }
}

export default ErrorPage;