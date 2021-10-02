import React, { Component } from 'react';
import './nav-bar.css' ;

import {Modes} from '../shared';
class NavBar extends Component<{
  modeHandler: any,
  sidebarToggler: any
}> {
    render(){
      return (
        <nav className="navbar-wrapper navbar">
            <div className="flex-item">
                <button className="navbar-toggler third-button" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent22" onClick={this.handleSidebarTogglerClick}
                        aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="animated-icon3">
                        <span></span>
                        <span></span>
                        <span></span></div>
                </button>
            </div>
            <div className="flex-item">
                <span className="navbar-item" onClick={this.handleGamesClick}>Games</span>
                <span className="navbar-item" onClick={this.handleWishlistClick} id="wishlist">Wishlist</span>
                <span className="navbar-item" >Languages</span>
            </div>


        </nav>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    handleWishlistClick = async () => {
      
      this.props.modeHandler(Modes.Wishlist)
    }

    handleGamesClick = async () => {
      this.props.modeHandler(Modes.Games)
    }

    handleSidebarTogglerClick = () => {
      this.props.sidebarToggler()
    }
    
}

export default NavBar;
