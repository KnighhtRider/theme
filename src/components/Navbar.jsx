import React from "react";
import '../styles/navbar.css'

function Navbar() {
  return (
   
      <nav class="navbar fixed" >
        <div class="container">
          <div class="navbar-wrapper clearfix">
            <div class="navbar-header">
              <div class="navbar-brand">
                <a
                  href="https://24estate.in/chandakchembureast/"
                  class="custom-logo-link"
                  rel="home"
                  aria-current="page"
                >
                  <img
                    width="805"
                    height="166"
                    src="https://24estate.in/chandakchembureast/wp-content/uploads/FOOETR-LOGO-1-1.webp"
                    class="custom-logo"
                    alt="Chandak Chembur East"
                    decoding="async"
                  />
                </a>
              </div>
              <button type="button" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="main-menu">
              <div class="button-close">
                <span class="vct-icon-close"></span>
              </div>
              <ul id="menu-desktop" class="nav navbar-nav">
                
                <li
                  id="menu-item-540"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-540"
                >
                  <a
                    href="#home"
                    data-ps2id-api="true"
                    class="__mPS2id _mPS2id-h"
                  >
                    <i
                      class="_mi _before fa fa-home"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>HOME</span>
                  </a>
                </li>
                <li
                  id="menu-item-541"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-541"
                >
                  <a
                    href="#price"
                    data-ps2id-api="true"
                    class="__mPS2id _mPS2id-h"
                  >
                    <i
                      class="_mi _before fas fa-chart-line"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>AREA &amp; PRICING</span>
                  </a>
                </li>
                <li
                  id="menu-item-542"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-542"
                >
                  <a href="#floorplan" data-ps2id-api="true" class="__mPS2id">
                    <i
                      class="_mi _before fa fa-align-left"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>FLOOR PLAN</span>
                  </a>
                </li>
                <li
                  id="menu-item-543"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-543"
                >
                  <a
                    href="#amenities"
                    data-ps2id-api="true"
                    class="__mPS2id _mPS2id-h"
                  >
                    <i
                      class="_mi _before fa fa-tree"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>AMENITIES</span>
                  </a>
                </li>
                <li
                  id="menu-item-544"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-544"
                >
                  <a
                    href="#location"
                    data-ps2id-api="true"
                    class="__mPS2id _mPS2id-h"
                  >
                    <i
                      class="_mi _before fa fa-location-arrow"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>LOCATION</span>
                  </a>
                </li>
                <li
                  id="menu-item-545"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-545"
                >
                  <a
                    data-ps2id-api="true"
                    data-toggle="fc_modal"
                    data-target="#modal-665ae631b8448"
                  >
                    <i
                      class="_mi _before far fa-file-pdf"
                      aria-hidden="true"
                      style={{ fontSize: '1em' }}
                    ></i>
                    <span>E-BROCHURE</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
