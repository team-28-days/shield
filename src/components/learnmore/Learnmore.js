import React from 'react';
import styles from './learnmore.css';

const Learnmore = () => (
  <div className={styles.learnMore}>
    <h2>Additional Resources</h2>
    <h3>Centers for Disease Control and Prevention</h3>
    <a href="https://www.cdc.gov/measles/index.html">CDC: Measles</a>
    <a href="https://www.cdc.gov/measles/cases-outbreaks.html">CDC Measles Cases and Outbreaks 2019</a>
    <h3>Public Health Authorities</h3>
    <a href="https://www.clark.wa.gov/public-health/measles-investigation#expand">Clark County Public Health Measles Investigation</a>
    <a href="https://www.doh.wa.gov/YouandYourFamily/IllnessandDisease/Measles/MeaslesOutbreak">Washington State Department of Health Measles Outbreak 2019</a>
    <a href="https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/measles.aspx">Oregon Health Authority 2019 Measles Information</a>
  </div>
);

export default Learnmore;
