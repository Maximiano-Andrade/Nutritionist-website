import "./Pricings.css"

const Pricings = () => {

    const itensPricings = [{
        id: 1,
        plano: "Basic Plan",
        discription: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
        price: "$49"
    }, {
        id: 2,
        plano: "Premium Plan",
        discription: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        price: "$79"

    }, {
        id: 3,
        plano: "Ultimate Plan",
        discription: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        price: "$99"
    }]


    return (
        <div className="Page-Pricings">
            <div className="main-Pricings">
                <div className="title-descript">
                    <div className="title">
                        <h1>Our Pricing</h1>
                    </div>
                    <div className="descript">
                        <p>
                            We outline our flexible and affordable options to support you on your
                            journey to optimal health and nutrition. We believe that everyone deserves access to
                            personalized nutrition guidance and resources
                        </p>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-btns-span-btn">
                        <div className="btns">
                            <div className="btn-mon">
                                <button>Monthly</button>
                            </div>
                            <div className="btn-yea">
                                <button>Yearly</button>
                            </div>
                        </div>
                        <div className="span-btn">
                            <span>Save 50% on Yearly</span>
                        </div>
                    </div>
                    <div className="conatiner-cards">
                        <ul className="cards-list">
                            {itensPricings.map((item) => (
                                <li className="card" key={item.id}>
                                    <div className="title-span">
                                        <h2>{item.plano}</h2>
                                        <span>Up to 50% off on Yearly Plan</span>
                                    </div>
                                    <div className="descript">
                                        <p>{item.discription}</p>
                                    </div>
                                    <div className="price-btn">
                                    <div className="price">
                                        <h2>{item.price}</h2>
                                        <span>/month</span>
                                    </div>
                                    <div className="btn">
                                        <p>Choose Plan</p>
                                    </div>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricings;