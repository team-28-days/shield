import React from 'react';
import styles from './Diseaseinfo.css';

function Diseaseinfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.disheader}>Disease Information</h2>
      <h3 className={styles.dissubheader}>What is measles?</h3>
      <p className={styles.discontent}>Measles is a serious respiratory disease that causes a rash and fever. 
          Measles is especially dangerous, and even deadly, for infants, 
          small children, and individuals with weakened immune systems.</p>
      <h3 className={styles.dissubheader}>Symptoms of measles</h3>
      <p className={styles.discontent}>Measles symptoms typically begin with high fever, cough, runny nose,
          and red, watery eyes. After 3-5 days, a rash usually begins on the face
            and spreads to other parts of the body.</p>
      <h3 className={styles.dissubheader}>How is it spread?</h3> 
      <p className={styles.discontent}>Measles is extremely contagious and spreads when a person
        with measles breathes out, coughs or sneezes. 
        Measles travels through the air, so you can get measles 
        just by being in a room where a person with measles has been. 
        The virus can linger in enclosed spaces for up to two hours.</p>
      <p className={styles.discontent}>Measles outbreaks can occur when travelers contract measles abroad and bring it back home. The virus also spreads through communities with greater numbers of unvaccinated people.</p>
      <p className={styles.discontent}>Source: Centers for Disease Control</p>
    </div>
  );
}

export default Diseaseinfo;
