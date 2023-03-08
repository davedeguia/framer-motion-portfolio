import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'

const People = () => {
  return (
    <motion.section className={`paddings ${css.wrapper}`}>
      <div className={`yPaddings innerWidth ${css.wrapper}`}>
        People Comments
      </div>
    </motion.section>
  )
}

export default People
