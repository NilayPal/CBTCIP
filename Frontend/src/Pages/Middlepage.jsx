import React from 'react';

const cardData = [
  {
    id: 1,
    title: "Card 1",
    text: "May your journey together be filled with endless love, joy, and the magic of a beautiful forever.",
    imgSrc: "https://images.unsplash.com/photo-1576694662383-508e793456c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZWRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#"
  },
  {
    id: 2,
    title: "Card 2",
    text:"May your birthday be filled with laughter, love, and all the beautiful moments that make life a true celebration.",
    imgSrc: "https://images.pexels.com/photos/6666746/pexels-photo-6666746.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#"
  },
  {
    id: 2,
    title: "Card 3",
    text: "Every party is a chance to dance to the rhythm of life, celebrate the joy of togetherness, and create unforgettable memories",
    imgSrc: "https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#"
  },
  {
    id: 2,
    title: "Card 4",
    text: "May the love you share grow stronger as you celebrate another year together, creating countless cherished memories alongtheway" ,
    imgSrc: "https://images.pexels.com/photos/1809344/pexels-photo-1809344.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#"
  },
  // Add more card objects as needed
];

const Card = ({ title, text, imgSrc, link }) => (
  <div className="card" style={{ width: '19rem' }}>
    <img src={imgSrc} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      
    </div>
  </div>
);

const Middlepage = () => {
  return (
    <div className="card-container">
      {cardData.map(card => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          imgSrc={card.imgSrc}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Middlepage;
