import React, { useState } from 'react'
import css from './Header.module.scss'
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { headerVariants } from '../../utils/motion'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
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

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={'30px'} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
