//import React from 'react'
//Style
import './OurBlogs.css'
// Image
import imgPostUm from '../../../assets/ourBlogs/ImageBlogs01.png'
import imgPerfilUm from '../../../assets/ourBlogs/ourBlogPerfil/ImagePerfil01.png'

import imgPostDois from '../../../assets/ourBlogs/ImageBlogs02.png'
import imgPerfilDois from '../../../assets/ourBlogs/ourBlogPerfil/ImagePerfil02.png'

import imgPostTres from '../../../assets/ourBlogs/ImageBlogs03.png'
import imgPerfilTres from '../../../assets/ourBlogs/ourBlogPerfil/ImagePerfil03.png'

import imgPostQua from '../../../assets/ourBlogs/ImageBlogs04.png'
import imgPerfilQua from '../../../assets/ourBlogs/ourBlogPerfil/ImagePerfil04.png'

// Icons
import { FaRegHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

const ListOurBlos = [
    {
        id: 1,
        img: imgPostUm,
        span: 'Weight Loss',
        title: 'The Benefits of Hydration for Weight Loss',
        descrition: 'Discover how staying hydrated can support your weight loss goals and improve overall health.',
        perfl: [{
            id: 1,
            img: imgPerfilUm,
            nome: 'Emily Johson',
        }]
    },
    {
        id: 2,
        img: imgPostDois,
        span: 'Mindful Eating',
        title: 'Cultivating a Healthy Relationship with Food',
        descrition: 'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
        perfl: [{
            id: 2,
            img: imgPerfilDois,
            nome: 'Sarah Thompson',
        }]
    },
    {
        id: 3,
        img: imgPostTres,
        span: 'Understanding Macronutrients',
        title: 'Carbohydrates, Proteins, and Fats',
        descrition: 'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
        perfl: [{
            id: 3,
            img: imgPerfilTres,
            nome: 'Mark Wilson',
        }]
    },
    {
        id: 4,
        img: imgPostQua,
        span: 'Quick and Nutritious Options',
        title: 'Carbohydrates, Proteins, and Fats',
        descrition: 'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
        perfl: [{
            id: 4,
            img: imgPerfilQua,
            nome: 'Emily Johnson',
        }]
    },
]

const OurBlogs = () => {
    return (
        <div className='OurBlogs-main'>
            <div className="Blogs-container">
                <div className="OurBlogs-titlo-subTitle">
                    <div className="OurBlogs-title">
                        <h1>Our Blogs</h1>
                    </div>
                    <div className="OurBlogs-subTitle">
                        <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here´s what you can expect from our blog.
                        </p>
                    </div>

                </div>
                <div className="OurBlogs-card-container">
                    <lu className="Cards-OurBlogs">
                        {ListOurBlos.map((Item) => (
                            <li key={Item.id} className="card">
                                <div className="card-img">
                                    <img src={Item.img} alt="Mulher" />
                                </div>
                                <div className="card-title-subTilte-descri-perfl">
                                    <div className="cart-title-subTitle">
                                        <span>{Item.span}</span>
                                        <h2>{Item.title}</h2>
                                    </div>
                                    <div className="cart-descrition">
                                        <p>{Item.descrition}</p>
                                    </div>
                                    <div className="cart-perfil">
                                        {Item.perfl.map((perf) => (
                                            <div key={perf.id} className="cart-img-title-icons">
                                                <div className="cart-img-title">
                                                    <div className="cart-perfil-img">
                                                        <img src={perf.img} alt="" />
                                                    </div>
                                                    <div className="cart-perfil-title">
                                                        <h3>{perf.nome}</h3>
                                                        <p>23 May 2023 - 5 min read</p>
                                                    </div>
                                                </div>
                                                <div className="cart-icons">
                                                    <div className="perfil-hert">
                                                        <FaRegHeart />
                                                    </div>
                                                    <div className="perfil-save">
                                                        <MdSaveAlt />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </li>
                        ))}
                    </lu>
                </div>
            </div>
        </div>
    )
}

export default OurBlogs