import React from 'react'
import css from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        Portfolio Section
      </div>
    </section>
  )
}

export default Portfolio
