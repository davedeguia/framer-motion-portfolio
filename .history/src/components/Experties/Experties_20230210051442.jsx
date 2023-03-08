import React from 'react'
import css from './Experties.module.scss'
import { projectsExperience } from '../../utils/data'

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectsExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className='flexCenter'>
                  <exp.icon size={25} color='white' />
                </div>

                <div>
                  <span>
                    <span></span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className={css.rightSide}></div>
      </div>
    </section>
  )
}

export default Experties
