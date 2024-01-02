import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../img/trainer.png'

const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainerImg} alt="" data-aos="fade-left" data-aos-duration="1500"/>
            </div>

            <div className="start__content" data-aos="fade-right" data-aos-duration="1500">
                <h2 className="section__title">Ready to make Change?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, earum similique in non commodi beatae? Quidem neque quasi fuga rem officia odio sint corrupti inventore. Ut, sed beatae? Dolor, accusamus!</p>

                <button className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start
