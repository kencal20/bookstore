import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="asdas" className="logo">
            <i className="fas fa-book"></i>brooklyn
          </a>
          <form action="" className="search-form">
            <input
              type="search"
              placeholder="search here....."
              id="search-box"
            />
            <label for="search-box" className="fas fa-search"></label>
          </form>
          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="like">
              <i className="fas fa-heart"></i>
            </a>
            <a href="cart">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="user">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
