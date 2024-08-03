import React,{useState} from 'react'

const Birthday = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        
        imageUrl: "https://images.unsplash.com/photo-1717050353133-13fb77e74b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcnRoZGF5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
      },
      
    ];

  return (
    <div>
      <div className='container'>
        <div className='slide'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url("${item.imageUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: index === currentIndex ? 'block' : 'none'
              }}
            >
           
            </div>
          ))}
          
        </div>
       <h5>"May your birthday be a day of joy, a time of love and laughter. Here's to celebrating the incredible person you are and the countless lives you touch. May your dreams come true and your heart be filled with happiness. Today is your special day, a reflection of the beautiful journey ahead. Wishing you all the best on this wonderful day."</h5>
      </div>
      
    </div>
  )
}

export default Birthday
