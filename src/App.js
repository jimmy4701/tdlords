import React, {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Rules from './pages/Rules'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/rules" exact component={Rules} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
