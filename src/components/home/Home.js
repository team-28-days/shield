import React from 'react';
import Map from '../map/Map';
import styles from './Home.css';



const Home = () => (
  <div className={styles.Map}>
    <h2>Map</h2>
    <div className={styles.MapContainer}>
      <Map />
    </div>
  </div>
);

export default Home;
