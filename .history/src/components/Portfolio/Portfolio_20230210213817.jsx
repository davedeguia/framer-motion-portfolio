import React from 'react'
import css from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={css.heading}>
          <div>
            <span></span>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
