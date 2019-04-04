import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import styles from './App.css';
import 'normalize.css';
import { 
  Route,
  Link,
  Switch,
  Redirect
}  from 'react-router-dom';

import Home from '../home/Home';
import Learnmore from '../learnmore/Learnmore';
import Diseaseinfo from '../diseaseinfo/Diseaseinfo';
import Vaccinationinfo from '../vaccinationinfo/Vaccinationinfo';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.Applogo}alt="Outbreak-finder-logo" />
          <h1 className={styles.AppTitle}>Outbreak Finder</h1>
        </header>
        <div className={styles.menu}>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Learnmore">Learn More</Link> </li>
            <li> <Link to="/Diseaseinfo">Disease Info</Link> </li>
            <li> <Link to="/Vaccinationinfo">Vaccination Info</Link> </li>
          </ul>
        </div>
        <div className="AppTastic">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/learnmore" component={Learnmore} />
            <Route path="/diseaseinfo" component={Diseaseinfo} />
            <Route path="/vaccinationinfo" component={Vaccinationinfo} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
