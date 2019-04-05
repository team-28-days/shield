import React from 'react';
import styles from './Learnmore.css';

const Learnmore = () => (
  <div className={styles.container}>
    <h2 className={styles.header}>Additional Resources</h2>
    <h3 className={styles.subheader}>Centers for Disease Control and Prevention</h3>
    <p><a href="https://www.cdc.gov/measles/index.html">CDC: Measles</a></p>
    <p><a href="https://www.cdc.gov/measles/cases-outbreaks.html">CDC Measles Cases and Outbreaks 2019</a></p>
    <h3 className={styles.subheader}>Public Health Authorities</h3>
    <p><a href="https://www.clark.wa.gov/public-health/measles-investigation#expand">Clark County Public Health Measles Investigation</a></p>
    <p><a href="https://www.doh.wa.gov/YouandYourFamily/IllnessandDisease/Measles/MeaslesOutbreak">Washington State Department of Health Measles Outbreak 2019</a></p>
    <p><a href="https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/measles.aspx">Oregon Health Authority 2019 Measles Information</a></p>
  </div>
);

export default Learnmore;
