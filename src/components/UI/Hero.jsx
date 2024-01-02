import React from 'react'
import gym from '../../img/gym-02.png'
import dombleIcon from '../../img/dumble.png'
import '../../styles/hero.css'

const Hero = () => {
    return <section id='home'>
        <div className="container">
            <div className="hero__wrapper">
                {/*--------------hero content-------------- */}
                <div className="hero__content">
                    <h2 className='section__title' 
                    data-aos="fade-up" data-aos-duration="1500">
                        Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle.</h2>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                        Quia porro libero sit! Eum, recusandae nulla maxime reiciendis 
                        
                    </p>

                    <div className="hero__btns"
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <button className="register__btn">Get Started</button>
                        <button className="watch__btn">
                            <span> <i className="ri-play-fill"></i>
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* ---------------hero img--------------- */}
                <div className="hero__img">
                    <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={gym} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart__rate" data-aos="fade-right" data-aos-duration="1500">
                            <h5>Heart Rate</h5>
                            <span><i className="fas fa-heart-rate"></i></span>
                            <h5>2567 BPM</h5>
                        </div>

                        <div className="gym__location" data-aos="fade-left" data-aos-duration="1500">
                            <span><i className="fa-solid fa-location-dot"></i></span>
                            <h5>Find a new <br/> gym near you</h5>
                        </div>

                        <div className="domble__icon" data-aos="fade-down" data-aos-duration="1500">
                            <img src={dombleIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Hero
