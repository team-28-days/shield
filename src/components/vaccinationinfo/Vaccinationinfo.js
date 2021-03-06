import React from 'react';
import styles from './Vaccinationinfo.css';

function VaccinationInfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.vaxheader}>Vaccination Information</h2>
      <h3 className={styles.vaxsubheader}>Measles, Mumps, and Rubella Vaccine (MMR)</h3>
      <p className={styles.vaxcontent}>You can protect yourself or your child against measles 
            with the measles, mumps, and rubella (MMR) vaccine. 
            The CDC recommends two doses of the MMR vaccine, 
            one given at 9 to 15 months of age, with a second dose at 15 months to 6 years of age. 
            People who have received two doses of the MMR vaccine 
            are 97 percent immunized and will likely not get measles, 
            even if exposed. Fully vaccinated individuals are also less likely 
            to spread the virus to others. In contrast, 90 percent of unvaccinated people 
            who are exposed to the virus will contract it.</p>
      <h3 className={styles.vaxsubheader}>If you think you have been exposed to measles...</h3>
      <p className={styles.vaxcontent}>Immediately contact your health care provider 
          and let them know you may have been exposed to someone 
          who has measles. They can help you determine if you are immune 
          or if you need to be evaluated. If you are not immune to measles, 
          you should stay away from locations with susceptible people 
          (like schools, hospitals, and childcare centers) 
          so that you do not expose others to the virus. 
          Your doctor can tell you when you are no longer contagious.</p>
      <h3 className={styles.vaxsubheader}>Have I been vaccinated?</h3>
      <a className={styles.vaxlink}href="https://www.cdc.gov/vaccines/adults/vaccination-records.html">CDC Vaccine Information for Adults</a>
    </div>
  );
}

export default VaccinationInfo;
