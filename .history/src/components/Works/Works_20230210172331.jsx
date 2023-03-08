import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion.js'
import { workExp } from '../../utils/data'

const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className='primaryText yPaddings'>My Work Experience</span>
        <div className={css.experiences}>
          {workExp.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                </div>
                <div className={css.role}></div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Works
