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
          <div className={css.right}>
            <div className={css.info}>
              <span className='secondaryText'>Information</span>
              <p>791 Penbrooke Rd SE, Calgary AB. Canada T2A 3T4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
