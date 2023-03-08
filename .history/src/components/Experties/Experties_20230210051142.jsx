import React from 'react'
import css from './Experties.module.scss'
import {projectsExperience} from '../../utils/data'

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>{projectsExperience.map((exp, i) => (
            
        ))}</div>
        <div className={css.rightSide}></div>
      </div>
    </section>
  )
}

export default Experties
