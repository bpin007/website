import React, {useState} from 'react'
import Log from '../asset/logo2.png';
import {Link} from 'react-router-dom'
import '../styleSheet/Navabar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
const Navabar = () => {
  const[Toggle, setToggle]=useState(false);
  return (
    <div className='Navbar'>
        <div className='leftSide' id={Toggle ? "open" : "close"}>
            <img src={Log}/>
            <div className='hiddenLinks' id={Toggle ? "open" : "close"}>
            <Link to="/" className='active'>Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/" className='actives'>Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">contact</Link>
            <button onClick={()=>{setToggle(!Toggle)}}><ReorderIcon/></button>
        </div>
    </div>
  );
}

export default Navabar