import React, { useState, useEffect } from 'react'
import { Carousel, Spinner} from 'react-bootstrap';

import banner1 from '../../assets/image/banner.jpg'
import banner2 from '../../assets/image/banner2.jpg'
import banner3 from '../../assets/image/banner3.jpg'
import Subscribtion from '../subcribation/Subcribation';
import AboutUs from '../AboutUS/AboutUs';
import Row from 'react-bootstrap/Row';
import CheifProfileCard from '../CheifProfileCard/CheifProfileCard';
export default function Home() {
  const [chiefProfile, setChiefProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:5000/chieprofile')
      .then(res => res.json())
      .then(data => {
        setChiefProfile(data);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Your Dream House"
          />
          <Carousel.Caption>
            <h1 className="d-none d-sm-block text-primary fw-bolder">Prawns Masala</h1>
            <p className="d-none d-sm-block text-dark fw-4 fw-bolder">Prawns Masala is a popular Indian seafood dish that features succulent prawns cooked in a flavorful, spicy tomato-based sauce. The dish is typically made by sautéing onions, garlic, and ginger in oil or ghee, then adding spices like cumin, coriander, and garam masala. Chopped tomatoes are then added to the mix, along with the prawns, and the mixture is simmered until the prawns are cooked through and the flavors have melded together. Prawns Masala is often served with rice or bread, and makes for a delicious and satisfying meal.</p>
            <h1 className="d-block d-sm-none text-primary fw-bolder">Prawns Masala</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Your Dream House"
          />
          <Carousel.Caption>
            <h1 className="d-none d-sm-block text-primary fw-bolder">Lemon Butter chicken </h1>
            <p className="d-none d-sm-block text-dark fw-4 fw-bolder ">.
              Lemon Butter chicken, also known as murgh makhani, is a popular Indian dish made with marinated chicken pieces that are cooked in a creamy tomato-based sauce. The chicken is usually marinated in a mixture of yogurt and spices, then grilled or roasted before being added to the sauce. The rich and flavorful sauce is made with butter, tomatoes, cream, and a blend of aromatic spices such as cumin, coriander, and garam masala. Butter chicken is often served with rice, naan, or roti, and is a beloved dish in Indian cuisine.</p>
            <h1 className="d-block d-sm-none text-primary fw-bolder">Lemon Butter chicken</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Your Dream House"
          />
          <Carousel.Caption>
            <h1 className="d-none d-sm-block text-primary fw-bolder">Sauteed Vegetables</h1>
            <p className="d-none d-sm-block text-dark fw-4 fw-bolder ">Sauteed Vegetables is a dish made by cooking a combination of vegetables such as zucchini, bell peppers, onions, mushrooms, and broccoli in a frying pan with olive oil or butter until they are tender and slightly caramelized. It is a healthy and easy-to-make side dish that can complement a variety of meals.</p>
            <h1 className="d-block d-sm-none text-primary fw-bolder">Sauteed Vegetables</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container my-5">
      <h1 className="text-center">Restaurant Chef Services !!</h1>
      <hr className="mb-5 w-50 mx-auto" />
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {chiefProfile.map((profile) => (
            <CheifProfileCard key={profile.chef_id} profile={profile} />
          ))}
        </Row>
      )}
    </div>
      <AboutUs></AboutUs>
      <Subscribtion></Subscribtion>

    </div>
  )
}
