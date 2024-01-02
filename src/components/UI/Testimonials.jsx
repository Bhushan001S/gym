import React from 'react';

// import { Navigation, Pagination, } from 'swiper/modules';
import SwiperCore from 'swiper'
import {Swiper} from 'swiper/react';
import { EffectCards, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/effect-cards'; // Import effect-cards CSS
import '../../styles/testimonial.css';
import avator01 from '../../img/avatar01.png';
import avator02 from '../../img/avatar02.png';

// Install Swiper modules
SwiperCore.use([EffectCards, Navigation, Pagination, Scrollbar, A11y]);

function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect="cards"
            grabCursor={true}
            className="mySwiper"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01"><img src={avator01} alt="" /></div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas neque saepe, veniam ipsa iure est
                  autem non, distinctio nesciunt deserunt nisi illum quos cumque animi perspiciatis iste. Doloremque,
                  veritatis laudantium.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02"><img src={avator02} alt="" /></div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas neque saepe, veniam ipsa iure est
                  autem non, distinctio nesciunt deserunt nisi illum quos cumque animi perspiciatis iste. Doloremque,
                  veritatis laudantium.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03"><img src={avator01} alt="" /></div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas neque saepe, veniam ipsa iure est
                  autem non, distinctio nesciunt deserunt nisi illum quos cumque animi perspiciatis iste. Doloremque,
                  veritatis laudantium.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
