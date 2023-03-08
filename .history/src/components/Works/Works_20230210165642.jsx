import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      className={`paddings ${css.wrapper}`}
    >
      <div className={css.container}></div>
    </motion.section>
  )
}

export default Works
