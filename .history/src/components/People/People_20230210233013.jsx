import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className='anchor' id='peaople'></a>
      <mdiv className={`yPaddings innerWidth ${css.wrapper}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className='primaryText'>People talk about us</span>
          <p style={{ marginTop: '2rem' }}>
            I got a job was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an application was quite cosy</p>
        </div>

        {/* carousel */}

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt='' />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </mdiv>
    </motion.section>
  )
}

export default People
