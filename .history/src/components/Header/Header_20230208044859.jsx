import React from 'react'
import css from './Header.module.scss'

const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.name}>Dave DG</div>
      </div>
    </div>
  )
}

export default Header
