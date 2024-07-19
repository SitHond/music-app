import Link from "next/link";
import React from "react";

const Header = () => {
    return(
        <header>
          <nav class="nav">
              <div class="container">
                  <div class="logo">
                      <a href="#">Music-app</a>
                  </div>
                  <div class="main_list" id="mainListDiv">
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">my work</a></li>
                          <li><a href="#">disegn</a></li>
                          <li><a href="#">dcontact</a></li>
                      </ul>
                  </div>
                  <div class="media_button">
                      <button class="main_media_button" id="mediaButton">
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                  </div>
              </div>
          </nav>
        </header>
    )
}
export default Header