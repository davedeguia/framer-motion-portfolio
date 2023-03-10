import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'
import staggerChildren

const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={css.container}>
        <span className='primaryText yPaddings'>My Work Experience</span>
      </div>
    </motion.section>
  )
}

export default Works
