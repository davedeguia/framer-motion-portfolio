import React from 'react'
import css from './Portfolio.module.scss'
import { fadeIn } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>My Latest Works</span>
            <p style={{ marginTop: '10px' }}>
              Perfect Solution for digital experience
            </p>
          </div>
          <span className='secondaryText'>Explore More Works</span>
        </div>

        {/* images */}
        <div className={css.showCase}>
          <motion.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase1.png'
            alt='project'
          />
          <motion.img
            variants={fadeIn('up', 'tween', 0.7, 0.6)}
            src='./showCase2.png'
            alt='project'
          />
          <motion.img
            variants={fadeIn('up', 'tween', 0.9, 0.6)}
            src='./showCase3.png'
            alt='project'
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
