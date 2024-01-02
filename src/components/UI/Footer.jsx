import React from 'react'
import '../../styles/footer.css'
import logo from '../../img/dumble.png'

const Footer = () => {

    const year= new Date().getFullYear()

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>Fitbody</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eligendi, qui? Provident totam eligendi voluptatum veniam.
                    </p>
                </div>

                <div className="footer__box">
                    <div className="footer__title">Company</div>
                     <ul className="footer__links">
                        <li><a href="#">Our program</a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                        <li><a href="#"></a></li>
                     </ul>
                </div>

                <div className="footer__box">
                    <div className="footer__title">Quick Links</div>
                     <ul className="footer__links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                     </ul>
                </div>

                <div className="footer__box">
                    <div className="footer__title">Quick Links</div>
                     <ul className="footer__links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                     </ul>
                </div>
            </div>

            <p className='copyright'>Copyright - {year}</p>
        </div>
    </footer>
  )
}

export default Footer
