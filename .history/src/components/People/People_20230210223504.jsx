import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion.js'

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.wrapper}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className='primaryText'>People talk about us</span>
        </div>
      </div>
    </motion.section>
  )
}

export default People
