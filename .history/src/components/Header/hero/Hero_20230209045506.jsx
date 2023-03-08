import React from 'react'
import css from './Hero.modules.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div>
          <span></span>
          <span></span>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Hero
