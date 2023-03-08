import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={css.container}>These are my works</div>
    </motion.section>
  )
}

export default Works
