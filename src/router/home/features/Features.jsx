//import React from 'react'
//Style
import './Features.css'

//Icons
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { PiBackpackFill } from "react-icons/pi";

const listFeatures = [
    {
        id: 1,
        icons: <PiFlowerTulipBold />,
        title: 'Personalized Nutrition Plans',
        description: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.'
    },
    {
        id: 2,
        icons: <FaGraduationCap />,
        title: 'Guidance from Certified Nutritionists',
        description: 'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.'
    },
    {
        id: 3,
        icons: <GiForkKnifeSpoon />,
        title: 'Food Tracking and Analysis',
        description: 'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.'
    },
    {
        id: 4,
        icons: <GiWeightLiftingUp />,
        title: 'Lifestyle and Behavior Coaching',
        description: 'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.'
    },
    {
        id: 5,
        icons: <BiSolidSpreadsheet />,
        title: 'Meal Planning and Recipes',
        description: 'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.'
    },
    {
        id: 6,
        icons: <PiBackpackFill />,
        title: 'Nutritional Education and Workshops',
        description: 'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.'
    },
]


const Features = () => {
    return (
        <div className='features-main'>
            <div className="features-container">
                <div className="features-title">
                    <div className="titles">
                        <div className='title'>
                            <h1>Features</h1>
                        </div>
                        <div className="subTitle">
                            <p>Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
                        </div>

                    </div>

                </div>

                <div className="features-cards">
                    <lu className="container-cards">
                        {listFeatures.map((item) => (
                            <li key={item.id} className='card'>
                                <div className="feature-title-icon">
                                    <div className="card-feature-icon">
                                        {item.icons}
                                    </div>
                                    <div className="card-feature-title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    </div>
                                    <div className="card-feature-descrip">
                                        <p>{item.description}</p>
                                    </div>
                                
                            </li>
                        ))}
                    </lu>
                </div>

            </div>
        </div>
    )
}

export default Features