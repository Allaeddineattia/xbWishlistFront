import React, { Component } from 'react';
import './nav-bar.css' ;

class NavBar extends Component {
    render(){
      return (
        <nav className="navbar-wrapper navbar">
          <div className="flex-item"><p>Games</p></div>
            <div className="flex-item"><p>Wishlist</p></div>
            <div className="flex-item"><p>Languages</p></div>
        </nav>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    
    
}

export default NavBar;
