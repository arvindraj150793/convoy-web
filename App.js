import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BottomNav from './components/shared/BottomNav';
import Feed from './components/feed/Feed';
import ConvoyCreation from './components/convoy/ConvoyCreation';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/create-convoy" component={ConvoyCreation} />
        </Switch>
        <BottomNav />
      </AuthProvider>
    </Router>
  );
}

export default App;