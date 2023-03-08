import React from 'react'
import css from './Experties.module.scss'
import { projectExperience, WhatDoIHelp } from '../../utils/data'

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className='flexCenter' style={{ background: exp.bg }}>
                  <exp.icon size={25} color='white' />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className='secondaryText'>{exp.projects} Projects</span>
                </div>
              </div>
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

          <div className={css.stats}>
            <div className={css.stat}>
              <span className='primaryText'>285+</span>
              <span className='secondaryText'>Projects Completed</span>
            </div>
          </div>
          <div className={css.stats}>
            <div className={css.stat}>
              <span>190+</span>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experties
