import React from 'react'
import css from './Experties.module.scss'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion.js'

const Experties = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn('right', 'tween', (i + 1) * 2, 1)}
                className={css.exp}
                key={i}
              >
                <div className='flexCenter' style={{ background: exp.bg }}>
                  <exp.icon size={25} color='white' />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className='secondaryText'>{exp.projects} Projects</span>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className={css.rightSide}>
          <span className='primaryText'>Experties </span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className='secondaryText' key={i}>
                {paragraph}
              </span>
            )
          })}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className='primaryText'>285+</span>
              <span className='secondaryText'>Projects Completed</span>
            </div>

            <div className={`flexCenter ${css.stat}`}>
              <span className='primaryText'>190+</span>
              <span className='secondaryText'>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experties
