import React from 'react'
import Styles from './About.module.css'

const About = () => {
  return (
    <section className={Styles.section}>
        <div className={Styles.contentContainer}>
            <h1 className={Styles.title}>About Us</h1>

            <p className={Styles.content}>
                We help, you help, we all do to help our kids grow. <br />
                Create an account to start with us now. <br />
                We are voted as one of the best monitoring web applications.
            </p>

            <p className={Styles.content}>
                We help parents track their child’s progress in school by providing them with 
                access to their child’s grades, test scores, assignments, and homework.
            </p>
        </div>
    </section>
  )
}

export default About