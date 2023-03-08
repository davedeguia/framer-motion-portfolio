import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper elements */}
        <div className={css.upperElements}>
          <span>
            Hey There, <br /> I'm Dave.
          </span>
          <span>
            I design beautiful simple <br /> things, And I love what I do
          </span>
        </div>

        {/* person image */}
        <div className={css.person}>
          <img src='./person.png' alt='' />
        </div>

        {/* email */}
        <a className={css.email} href='mailto:dave.deguia@gmail.com'>
          dave.deguia@gmail.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className='primaryText'>10</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src='./certificate.png' alt='' />
            <span>FRONT END DEVELOPER</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
