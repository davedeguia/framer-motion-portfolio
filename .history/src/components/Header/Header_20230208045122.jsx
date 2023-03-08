import React from 'react'
import css from './Header.module.scss'

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter ${css.container}`}>
        <div className={css.name}>Dave DG</div>
      </div>
    </div>
  )
}

export default Header
