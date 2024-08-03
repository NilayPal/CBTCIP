import React from 'react'

const Food = () => {



const menuData = [
    {
      id: 1,
      category: "Starters(Veg and Non-Veg Both are Avaliable)",
      items: [
        { name: "Veg", description: "Crispy chili baby corn,Paneer Tikka,Stuffed Mushrooms,Veg-Pakoda,Malai-Paneer in Tandoor,Bhutta Palak da sheek", price: "$6" },
        { name: "Non-Veg", description: "Hariyali-Tikka-Kebab,Chiken-Drumstick, Tandoori-Chiken-Chilli, Fish-Ball, Fish-Tikka ,Dragon-Fried-Fish, Fish in Grlic Butter Pepper", price: "$7" }
      ],
    },
    {
      id: 2,
      category: "Main Course",
      items: [
        { name: "Rice-Course", description: "Plain-Rice,Vegetable-Pulao, Peas-Pulao, Dam-Vegetable-Biriyani, Fried-Rice,", price: "$15" },
        { name: "Pasta Carbonara", description: "Pasta with creamy sauce and pancetta", price: "$12" }
      ]
    },
    {
      id: 3,
      category: "Desserts",
      items: [
        { name: "Sweets", description: "Rosogolla, Hot-Gulabjamun, Rasmalai, Hot-Sandesh, Rabari, Misti-Dahi  ", price: "$8" },
        { name: "Pastry", description: "Hot-Chocolate, Hot-Brownie, Mousse, Caramel-Custard, Saffron-Sundae", price: "$7" }
      ]
    },
    {
      id: 4,
      category: "Beverages",
      items: [
        { name: "Fresh Lemonade", description: "Homemade lemonade with fresh lemons", price: "$3" },
        { name: "Iced Tea", description: "Cold brewed iced tea with a hint of lemon", price: "$2.5" }
      ]
    }
  ];
  
  const MenuCategory = ({ category, items }) => (
    <div className="menu-category">
      <h3>{category}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="menu-item-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
            <div className="menu-item-price">{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );




  return (
    <div>
     
     <h3 className='food'>We Also serve delicious Food in a Very affordable price....<br></br>
         Please have a look on this food and Give us the order...
         
     </h3>
       <div className="menu">
      
      {menuData.map(category => (
        <MenuCategory
          key={category.id}
          category={category.category}
          items={category.items}
        />
      ))}
    </div>
    </div>
  )
}

export default Food
