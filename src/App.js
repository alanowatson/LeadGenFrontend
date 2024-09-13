import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import LeadGenDashboard from './pages/LeadGenDashboard';
import AffinityArtistGenerator from './pages/AffinityArtistGenerator';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/dashboard' component={LeadGenDashboard} />
          <PrivateRoute
            path='/affinity-generator'
            component={AffinityArtistGenerator}
          />
          <PrivateRoute exact path='/' component={LeadGenDashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
