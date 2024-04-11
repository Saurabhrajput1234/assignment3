import React from 'react'
import Slider from '../slider/Slider';
import product3 from '../pics/Frame 600.svg'
import product4 from '../pics/Frame 560.svg'
import "./home.css";
import CardList from '../cards/CardList';
import ReviewsCardList from '../reviews/ReviewsCardList';


const Home = () => {

  const slides = [
    <img src={product4} alt="Slide 1" />,
    <img src={product3} alt="Slide 2" />,
  ];

  const cards = [
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 1"' },
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 2"' },
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 3"' },
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 4"' },
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 5"' },
    { title: 'Amit Jha', content: '"Some review submitted by the user about company 6"' },
  ];

  return (
    <div style={{ width: "98vw", overflow: "hidden" }}>
      <div className="banner-container">
        <div className="banner">
          <Slider slides={slides} interval={3000} />
        </div>
      </div>

      <div className="top-students">
        <div className="heading"><h2 >Top Students</h2></div>
        <CardList cards={cards} />
      </div>
      <div className="reviews">
        <div className="heading"><h2>Reviews</h2></div>
        <ReviewsCardList cards={cards} />
      </div>

    </div>
  )
}

export default Home
