//import React from 'react'
// Style
import './Home.css'
//page
import Banner from '../../../src/router/home/banner/Banner'
import Features from './features/Features'
import OurBlogs from './ourBlogs/OurBlogs'

const Home = () => {
    return (
        <div className="home-main">
            <Banner />
            <Features/>
            <OurBlogs/>
        </div>
    )
}

export default Home