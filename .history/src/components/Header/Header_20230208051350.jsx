import React from 'react'
import css from './Header.module.scss'
import { BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Dave DG</div>

        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href=''>Services</a>
          </li>

          <li>
            <a href=''>Experience</a>
          </li>

          <li>
            <a href=''>Portfolio</a>
          </li>

          <li>
            <a href=''>Testimonials</a>
          </li>

          <li className={`flexCenter ${css.phone}`}>
            <p>+1403 969 9539</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
