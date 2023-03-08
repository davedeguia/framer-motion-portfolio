import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion.js'

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.wrapper}`}>
        People Comments
      </div>
    </motion.section>
  )
}

export default People
