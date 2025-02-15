//import React from 'react'
// Style
import './Home.css'
//page
import Banner from '../../../src/router/home/banner/Banner'
import Features from './features/Features'
import OurBlogs from './ourBlogs/OurBlogs'
import OurTestimonials from './ourTestimonials/OurTestimonials'

const Home = () => {
    return (
        <div className="home-main">
            <Banner />
            <Features/>
            <OurBlogs/>
            <OurTestimonials/>
        </div>
    )
}

export default Home