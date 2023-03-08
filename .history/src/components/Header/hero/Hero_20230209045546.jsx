import React from 'react'
import css from './Hero.modules.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span></span>
          <span></span>
        </div>
        <div className={css.lowerElements}></div>
      </div>
    </section>
  )
}

export default Hero
