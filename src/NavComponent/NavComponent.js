import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavComponent.css';

  class NavComponent extends Component {

	burgerToggle() {
	  let linksEl = document.querySelector('.narrowLinks');
	  if (linksEl.style.display === 'block') {
	    linksEl.style.display = 'none';
	  } else {
	    linksEl.style.display = 'block';
	  }
	}

    render() {
      return (
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="#">Home</a>
              <a href="#">Order</a>
              <a href="#">Menus</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
              <div className="narrowLinks">
                <a href="#" onClick={this.burgerToggle}>Home</a>
                <a href="#" onClick={this.burgerToggle}>Order</a>
                <a href="../Menus/MainMenu.html" onClick={this.burgerToggle}>Menus</a>
                <a href="#" onClick={this.burgerToggle}>Contact</a>
              </div>
          </div>
        </nav>
      );
    }
  };




export default NavComponent;