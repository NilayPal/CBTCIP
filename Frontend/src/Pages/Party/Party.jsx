import React,{useState} from 'react'

const Party = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        
        imageUrl: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5fGVufDB8fDB8fHww"
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
       <h5>'-'_꩜ "𝘔𝘢𝘺 𝘺𝘰𝘶𝘳 𝘱𝘢𝘳𝘵𝘺 𝘣𝘦 𝘢𝘯 𝘶𝘯𝘧𝘰𝘳𝘨𝘦𝘵𝘵𝘢𝘣𝘭𝘦 𝘤𝘦𝘭𝘦𝘣𝘳𝘢𝘵𝘪𝘰𝘯, 𝘢 𝘯𝘪𝘨𝘩𝘵 𝘧𝘪𝘭𝘭𝘦𝘥 𝘸𝘪𝘵𝘩 𝘫𝘰𝘺 𝘢𝘯𝘥 𝘤𝘩𝘦𝘳𝘪𝘴𝘩𝘦𝘥 𝘮𝘰𝘮𝘦𝘯𝘵𝘴. 𝘏𝘦𝘳𝘦'𝘴 𝘵𝘰 𝘤𝘳𝘦𝘢𝘵𝘪𝘯𝘨 𝘯𝘦𝘸 𝘮𝘦𝘮𝘰𝘳𝘪𝘦𝘴 𝘸𝘪𝘵𝘩 𝘧𝘳𝘪𝘦𝘯𝘥𝘴 𝘢𝘯𝘥 𝘭𝘰𝘷𝘦𝘥 𝘰𝘯𝘦𝘴, 𝘥𝘢𝘯𝘤𝘪𝘯𝘨 𝘵𝘩𝘦 𝘯𝘪𝘨𝘩𝘵 𝘢𝘸𝘢𝘺, 𝘢𝘯𝘥 𝘴𝘩𝘢𝘳𝘪𝘯𝘨 𝘭𝘢𝘶𝘨𝘩𝘵𝘦𝘳. 𝘓𝘦𝘵 𝘵𝘩𝘦 𝘮𝘶𝘴𝘪𝘤, 𝘵𝘩𝘦 𝘭𝘪𝘨𝘩𝘵𝘴, 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘷𝘪𝘣𝘳𝘢𝘯𝘵 𝘢𝘵𝘮𝘰𝘴𝘱𝘩𝘦𝘳𝘦 𝘮𝘢𝘬𝘦 𝘦𝘷𝘦𝘳𝘺 𝘮𝘰𝘮𝘦𝘯𝘵 𝘴𝘱𝘦𝘤𝘪𝘢𝘭. 𝘈𝘴 𝘸𝘦 𝘨𝘢𝘵𝘩𝘦𝘳 𝘵𝘰𝘨𝘦𝘵𝘩𝘦𝘳, 𝘮𝘢𝘺 𝘵𝘩𝘦 𝘴𝘱𝘪𝘳𝘪𝘵 𝘰𝘧 𝘧𝘶𝘯 𝘢𝘯𝘥 𝘤𝘢𝘮𝘢𝘳𝘢𝘥𝘦𝘳𝘪𝘦 𝘣𝘳𝘪𝘯𝘨 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦 𝘤𝘭𝘰𝘴𝘦𝘳. 𝘞𝘪𝘴𝘩𝘪𝘯𝘨 𝘺𝘰𝘶 𝘢 𝘯𝘪𝘨𝘩𝘵 𝘧𝘶𝘭𝘭 𝘰𝘧 𝘦𝘹𝘤𝘪𝘵𝘦𝘮𝘦𝘯𝘵 𝘢𝘯𝘥 𝘩𝘢𝘱𝘱𝘪𝘯𝘦𝘴𝘴, 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘨𝘰𝘰𝘥 𝘵𝘪𝘮𝘦𝘴 𝘳𝘰𝘭𝘭 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘴𝘮𝘪𝘭𝘦𝘴 𝘯𝘦𝘷𝘦𝘳 𝘧𝘢𝘥𝘦. 𝘊𝘩𝘦𝘦𝘳𝘴 𝘵𝘰 𝘢𝘯 𝘢𝘮𝘢𝘻𝘪𝘯𝘨 𝘱𝘢𝘳𝘵𝘺 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘣𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘤𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘰𝘯𝘴 𝘸𝘦 𝘴𝘩𝘢𝘳𝘦!" ꩜_'-'</h5>
      </div>
    </div>
  )
}

export default Party
