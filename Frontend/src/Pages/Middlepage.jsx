import React from 'react';

const cardData = [
  {
    id: 1,
    title: "Card title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://images.unsplash.com/photo-1576694662383-508e793456c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZWRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#"
  },
  {
    id: 2,
    title: "Card title 2",
    text: "Some more example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://images.unsplash.com/photo-1576694662383-508e793456c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZWRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#"
  },
  {
    id: 2,
    title: "Card title 2",
    text: "Some more example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://images.unsplash.com/photo-1576694662383-508e793456c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZWRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#"
  },
  {
    id: 2,
    title: "Card title 2",
    text: "Some more example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://images.unsplash.com/photo-1576694662383-508e793456c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZWRpbmd8ZW58MHx8MHx8fDA%3D",
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
      <a href={link} className="btn btn-primary">Go somewhere</a>
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
