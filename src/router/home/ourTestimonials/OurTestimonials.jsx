import './OurTestimonials.css'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

//Img
import img_perfil_1 from '../../../assets/OurTestimonials/Image_1.png'
import img_perfil_2 from '../../../assets/OurTestimonials/Image_2.png'
import img_perfil_3 from '../../../assets/OurTestimonials/Image_3.png'

// Icon
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialsItems = [
    {
        id: 1,
        comment: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
        img: img_perfil_1,
        name: 'Jennifer Anderson'
    },
    {
        id: 2,
        comment: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
        img: img_perfil_2,
        name: 'Robert Johnson'
    },
    {
        id: 3,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: img_perfil_3,
        name: 'Emily Davis'
    },
    {
        id: 4,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: img_perfil_1,
        name: 'Emily Davis'
    },
    {
        id: 5,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: img_perfil_2,
        name: 'Emily Davis'
    },
    {
        id: 6,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: img_perfil_3,
        name: 'Emily Davis'
    },
]


const OurTestimonials = () => {
    return (
        <div className='OurTestimonials-main'>
            <div className="ourTestimonials-conatiner">
                <div className="ourTestimonials-title-subTitle">
                    <div className="testimonials-title">
                        <h1>Our Testimonials</h1>
                    </div>
                    <div className="testimonials-subTitle">
                        <p>Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
                    </div>
                </div>

                <div className="testimonials-card-carrossel">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        clickable={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={
                            {
                                el: '.swiper-pagination',
                                clickable: true
                            }
                        }
                        modules={[Pagination, Navigation]}>
                        {TestimonialsItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="card">
                                    <div className="testimonials-icon-descript">
                                    <div className="testimonials-card-icon">
                                        <RiDoubleQuotesL />
                                    </div>
                                    <div className="testimonials-card-decript">
                                        <p>{item.comment}</p>
                                    </div>
                                    </div>
                            
                                    <div className="testimonials-card-perfil">
                                    <div className="testimonials-perfil-img">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="testimonials-card-name">
                                        <h3>{item.name}</h3>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="testimonials-controler">
                            <div className="card-button">
                                <div className="btn swiper-button-prev"></div>
                                <div className="swiper-pagination"></div>
                                <div className="btn swiper-button-next"></div></div>
                        </div>
                    </Swiper>

                </div>

            </div>
        </div>
    )
}

export default OurTestimonials