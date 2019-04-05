import React from 'react';
import Map from '../map/Map';
import styles from './Home.css';



const Home = () => (
  <div className={styles.Map}>
    <div className={styles.MapContainer}>
      <Map />
    </div>
  </div>
);

export default Home;
