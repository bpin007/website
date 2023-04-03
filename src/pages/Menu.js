import MenuItem from '../componet/MenuItem'
import React from 'react'
 import {MenuList} from '../helper/MenuList'
 import '../styleSheet/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menu-heading'> OUR MENU</h1>
      <div className='menuList'>
       {MenuList.map((menuItem, Key)=>{
        // console.log(menuItem.image)
        return ( <MenuItem
          k={Key}
           image={menuItem.image} 
           name={menuItem.name}
            price={menuItem.price}
       />
       )
       })}
      </div>
    </div>
  )
}

export default Menu 