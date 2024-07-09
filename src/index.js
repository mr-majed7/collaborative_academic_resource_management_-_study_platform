// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers';
import App from './App';
import AddMaterials from './components/AddMaterials';
import ViewMaterials from './components/ViewMaterials';
import SearchMaterials from './components/SearchMaterials';
import QnA from './components/QnA';
import UserProfiles from './components/UserProfiles';
import GroupSessions from './components/GroupSessions';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/add-materials" component={AddMaterials} />
          <Route path="/view-materials" component={ViewMaterials} />
          <Route path="/search-materials" component={SearchMaterials} />
          <Route path="/qna" component={QnA} />
          <Route path="/user-profiles" component={UserProfiles} />
          <Route path="/group-sessions" component={GroupSessions} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
