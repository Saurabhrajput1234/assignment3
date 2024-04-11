import React from 'react'
import "./reviewsCardList.css"

const ReviewsCard = ({title,content}) => {
  return (
    <div className="Rcard">
      <h2>{title}</h2>
      <div className="card-Review"><p>{content}</p></div>
    </div>
  )
}

const ReviewsCardList = ({cards})=>{
  return(
    <div className="Rcard-list">
      {cards.map((card,index)=>(<ReviewsCard key={index} title={card.title} content={card.content} />))}
    </div>
  );
}

export default ReviewsCardList;