import React from 'react'
import Styles from './Footer.module.css'
import { Divider } from '@mantine/core'
import Brand from '../../assets/brand'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={Styles.footer}>

        <div className={Styles.content}>
        <Divider />

            <div className={Styles.contentRow}>
                <div className={Styles.contentCol}>
                    <Brand color={"white"} imgColor={'white'} />
                    <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home.</p>
                </div>


                <div className={Styles.ServicesAndSupport}>
                    <div className={Styles.contentCol}>
                        <h3 className={Styles.title}>Services</h3>
                        <ul className={Styles.services}>
                            <li>Business English</li>
                            <li>Preston Marshall</li>
                            <li>Social Computing</li>
                            <li>David Sanders</li>
                            <li>Learn Spanish</li>
                            <li>Jannie King</li>
                        </ul>
                    </div>

                    <div className={Styles.contentCol}>
                        <h3 className={Styles.title}>Support</h3>
                        <ul className={Styles.support}>
                            <li>
                                <Link className={Styles.link} to={'/'}>User dashboard</Link>
                            </li>
                            <li>
                                <Link className={Styles.link} to={'/'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link className={Styles.link} to={'/'}>FAQ</Link>
                            </li>
                            <li>
                                <Link className={Styles.link} to={'/'}>Course Offer</Link>
                            </li>
                            <li>
                                <Link className={Styles.link} to={'/'}>Events</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={Styles.contentCol}>
                    <div className={Styles.card}>
                        <p className={Styles.cardContent}>
                            Effortlessly manage your users and streamline your workflow with our user management system.
                        </p>
                    </div>
                </div>
            </div>

        <Divider />
        </div>

    </footer>
  )
}

export default Footer