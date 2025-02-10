//import React from 'react'
//Style
import './joinDemo.css'
//icons
import { HiArrowRight } from "react-icons/hi";
// // img
import ImgJoin from '../../assets/joinDemoImg/IconJoinDemo.png'

const joinDemo = () => {
    return (
        <div className='join-main'>
            <div className="join-Demo">
                <div className="join-infos">
                    <div className="join-img img-01"></div>
                    <div className="join-btn">
                        <button className='btn'>
                            <div><img src={ImgJoin} /></div>
                            Join Our Personalized Nutrition Demo For Free
                        </button>
                        <HiArrowRight />
                    </div>
                    <div className="join-img img-02"></div>
                </div>
            </div>
        </div>
    )
}

export default joinDemo