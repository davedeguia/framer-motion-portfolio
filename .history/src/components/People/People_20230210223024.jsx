import React from 'react'
import css from './People.module.scss'

const People = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`yPaddings innerWidth ${css.wrapper}`}>
        People Comments
      </div>
    </section>
  )
}

export default People
