import React from "react";
import './header.css'
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="asdas" class="logo">
            {" "}
            <i className="fas fa-book"></i>brooklyn
          </a>
          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search heare....."
              id="search-box"
            />
            <label for="search-box" className="fas fa-search"></label>
          </form>
        </div>
      </header>
    </div>
  );
}
