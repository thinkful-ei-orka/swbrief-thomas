import React from 'react';
import { Route } from 'react-router-dom';
import { SWContextProvider } from './SW-Context/SWContext';
import './App.css';

import SWHeader from './SW-Header/SWHeader';
import SWSearch from './SW-Search/SWSearch';
import SWList from './SW-List/SWList';
import SWDetails from './SW-Details/SWDetails';
import ErrorPage from './ErrorPage/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SWHeader></SWHeader>
        <SWContextProvider>
          <ErrorPage>
            <Route path='/' component={SWSearch} />
            <Route path='/' exact component={SWList} />
            <Route path='/search/:searchId' exact component={SWList} />
            <Route path='/people/:peopleId' exact component={SWDetails} />
          </ErrorPage>
        </SWContextProvider>
      </div>
    );
  }
}

export default App;
