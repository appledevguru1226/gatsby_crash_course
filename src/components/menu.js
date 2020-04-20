import React from 'react'
import { Link } from 'gatsby'

const Menu = () => 
    (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>
        <u1 style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </u1>  


        </div>
    )

export default Menu;

