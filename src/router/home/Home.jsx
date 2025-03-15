//import React from 'react'
// Style
import './Home.css'
//page
import Banner from '../../../src/router/home/banner/Banner'
import Features from './features/Features'
import OurBlogs from './ourBlogs/OurBlogs'
import OurTestimonials from './ourTestimonials/OurTestimonials'
import Pricings from "./pricings/Pricings.jsx";

const Home = () => {
    return (
        <div className="home-main">
            <Banner />
            <Features/>
            <OurBlogs/>
            <OurTestimonials/>
            <Pricings/>
        </div>
    )
}

export default Home