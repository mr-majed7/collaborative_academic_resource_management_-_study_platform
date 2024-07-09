import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddMaterials from './components/AddMaterials';
import ViewMaterials from './components/ViewMaterials';
import SearchMaterials from './components/SearchMaterials';
import QnA from './components/QnA';
import UserProfiles from './components/UserProfiles';
import GroupSessions from './components/GroupSessions';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Study Platform</h1>
          <Switch>
            <Route path="/add-materials" component={AddMaterials} />
            <Route path="/view-materials" component={ViewMaterials} />
            <Route path="/search-materials" component={SearchMaterials} />
            <Route path="/qna" component={QnA} />
            <Route path="/user-profiles" component={UserProfiles} />
            <Route path="/group-sessions" component={GroupSessions} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

