import React from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  links = ['Home', 'Popular', 'Battle'];

  render() {
    return (
      <div className='nav'>
        <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
          {this.links.map((link, index) => (
            <NavLink to={link === 'Home' ? '/' : link.toLowerCase()} key={index} className='nl'>{link}</NavLink>
          ))}
        </nav>
      </div>
    );
  }
  
}