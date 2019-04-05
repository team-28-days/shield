import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import styles from './App.css';
import 'normalize.css';
import { 
  Route,
  Link,
  Switch
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
        <div id="menu" className={styles.menu}>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Diseaseinfo">Disease Info</Link> </li>
            <li> <Link to="/Vaccinationinfo">Vaccination Info</Link> </li>
            <li> <Link to="/Learnmore">Learn More</Link> </li>
          </ul>
        </div>
        <div className="AppTastic">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/diseaseinfo" component={Diseaseinfo} />
            <Route path="/vaccinationinfo" component={Vaccinationinfo} /> 
            <Route path="/learnmore" component={Learnmore} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
