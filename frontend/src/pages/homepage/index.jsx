import React from 'react'
import Navbar from '../../components/navbar'
import Styles from './HomePage.module.css'
import { Button } from '@mantine/core';
import HeroImage from '../../assets/images/hero-woman.svg'
import Header from '../../components/header';
import CurvesDivider from '../../assets/images/home-bottom-curves.svg'

const HomePage = () => {
  return (
    <section className={Styles.section}>
        <Header />
        <Navbar />
        <main className={Styles.hero}>
          <div className={Styles.content}>
            <h1 className={Styles.title}>
              Track The Real Time Performance of your 
              child Today.
            </h1>

            <p className={Styles.subContent}>
              A one in all application which allows parents to know the 
              performance of their wards anywhere anytime with ease.
            </p>

            <Button variant="filled" size="md" radius="xs">Read more</Button>
          </div>

          <div className={Styles.heroImage}>
            <img className={Styles.KidsWithBooks} src={HeroImage} alt="A man and a woman chatting..." />
          </div>
      </main>

      <div className={Styles.divider}>
        <img src={CurvesDivider} alt="curves divider" />
      </div>
    </section>
  )
}

export default HomePage