import React from 'react'
import css from './Hero.modules.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* upper elements */}
        <div className={css.upperElements}>
          <span>
            Hey There, <br /> I'm Dave.
          </span>
          <span>
            I design beautiful simple <br /> things, And I love what I do
          </span>
        </div>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
