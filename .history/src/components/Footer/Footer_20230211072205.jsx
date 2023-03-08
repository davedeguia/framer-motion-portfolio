import React from 'react'
import css from './Footer.module.scss'

const Footer = () => {
  return (
    <section>
      <div className={css.container}>
        <div className={css.container}>
          <div className={css.left}>
            <span className='primaryText'>
              Let's make something <br /> amazing together.
            </span>
            <span className='primaryText'>
              Start by <a href='mailto:dave.deguia@gmail.com'>saying hi</a>
            </span>
          </div>
          <div className={css.right}>right</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
