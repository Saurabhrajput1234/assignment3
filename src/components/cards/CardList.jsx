import React from 'react'
import "./cardList.css"

const Card = ({title,content}) => {
  return (
    <div className="card">
    <div className="image-card" ></div>
    <div className="card-text"><h2>{title}</h2>
    <div className="card-Review"><p>{content}</p></div>
      </div>
      
    </div>
  )
}

const CardList = ({cards})=>{
  return(
    <div className="card-list">
      {cards.map((card,index)=>(<Card key={index} title={card.title} content={card.content} />))}
    </div>
  )
}

export default CardList;
