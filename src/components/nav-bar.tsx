import React, { Component } from 'react';
import './nav-bar.css' ;

class NavBar extends Component {
    render(){
      return (
        <nav className="navbar-wrapper navbar">
            <div className="flex-item">
                <button className="navbar-toggler third-button" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent22"
                        aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="animated-icon3">
                        <span></span>
                        <span></span>
                        <span></span></div>
                </button>
            </div>
            <div className="flex-item">
                <span className="navbar-item">Games</span>
                <span className="navbar-item">Wishlist</span>
                <span className="navbar-item">Languages</span>
            </div>


        </nav>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    
    
}

export default NavBar;
