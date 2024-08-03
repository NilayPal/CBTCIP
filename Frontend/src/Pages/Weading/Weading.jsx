import React ,{useState,useEffect}from 'react'

const Weading = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        
        imageUrl: "https://plus.unsplash.com/premium_photo-1682092597591-81f59c80d9ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        
        imageUrl: "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
       
        imageUrl: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
      },
      {
       
        imageUrl: "https://images.unsplash.com/photo-1517504544462-e6b28c1abb8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fEluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [items.length]);
  


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
       <h5>"𝔸 𝕨𝕖𝕕𝕕𝕚𝕟𝕘 𝕚𝕤 𝕥𝕙𝕖 𝕔𝕖𝕝𝕖𝕓𝕣𝕒𝕥𝕚𝕠𝕟 𝕠𝕗 𝕝𝕠𝕧𝕖'𝕤 𝕡𝕣𝕠𝕞𝕚𝕤𝕖, 𝕨𝕙𝕖𝕣𝕖 𝕥𝕨𝕠 𝕤𝕠𝕦𝕝𝕤 𝕦𝕟𝕚𝕥𝕖 𝕥𝕠 𝕨𝕒𝕝𝕜 𝕝𝕚𝕗𝕖'𝕤 𝕛𝕠𝕦𝕣𝕟𝕖𝕪 𝕙𝕒𝕟𝕕 𝕚𝕟 𝕙𝕒𝕟𝕕. 𝕀𝕟 𝕥𝕙𝕖 𝕕𝕒𝕟𝕔𝕖 𝕠𝕗 𝕝𝕚𝕗𝕖, 𝕚𝕥 𝕚𝕤 𝕥𝕙𝕖 𝕞𝕠𝕞𝕖𝕟𝕥 𝕨𝕙𝕖𝕟 𝕥𝕨𝕠 𝕙𝕖𝕒𝕣𝕥𝕤 𝕗𝕚𝕟𝕕 𝕥𝕙𝕖𝕚𝕣 𝕣𝕙𝕪𝕥𝕙𝕞 𝕥𝕠𝕘𝕖𝕥𝕙𝕖𝕣. 𝕀𝕥 𝕞𝕒𝕣𝕜𝕤 𝕥𝕙𝕖 𝕓𝕖𝕘𝕚𝕟𝕟𝕚𝕟𝕘 𝕠𝕗 𝕒 𝕟𝕖𝕨 𝕔𝕙𝕒𝕡𝕥𝕖𝕣, 𝕨𝕙𝕖𝕣𝕖 𝕝𝕠𝕧𝕖 𝕨𝕣𝕚𝕥𝕖𝕤 𝕥𝕙𝕖 𝕤𝕥𝕠𝕣𝕪 𝕒𝕟𝕕 𝕗𝕠𝕣𝕖𝕧𝕖𝕣 𝕓𝕖𝕔𝕠𝕞𝕖𝕤 𝕥𝕙𝕖 𝕕𝕖𝕤𝕥𝕚𝕟𝕒𝕥𝕚𝕠𝕟. 𝔸𝕞𝕚𝕕𝕤𝕥 𝕥𝕙𝕖 𝕝𝕒𝕦𝕘𝕙𝕥𝕖𝕣 𝕒𝕟𝕕 𝕥𝕙𝕖 𝕥𝕖𝕒𝕣𝕤, 𝕒 𝕨𝕖𝕕𝕕𝕚𝕟𝕘 𝕚𝕤 𝕒 𝕥𝕒𝕡𝕖𝕤𝕥𝕣𝕪 𝕨𝕠𝕧𝕖𝕟 𝕨𝕚𝕥𝕙 𝕥𝕙𝕖 𝕥𝕙𝕣𝕖𝕒𝕕𝕤 𝕠𝕗 𝕛𝕠𝕪, 𝕙𝕠𝕡𝕖, 𝕒𝕟𝕕 𝕖𝕧𝕖𝕣𝕝𝕒𝕤𝕥𝕚𝕟𝕘 𝕝𝕠𝕧𝕖, 𝕓𝕖𝕔𝕠𝕞𝕚𝕟𝕘 𝕥𝕙𝕖 𝕙𝕒𝕣𝕞𝕠𝕟𝕚𝕠𝕦𝕤 𝕤𝕪𝕞𝕡𝕙𝕠𝕟𝕪 𝕠𝕗 𝕙𝕖𝕒𝕣𝕥𝕤 𝕓𝕖𝕒𝕥𝕚𝕟𝕘 𝕒𝕤 𝕠𝕟𝕖.𝕤"</h5>
      </div>
      
    </div>
  )
}

export default Weading
