import React from "react";
import "../styles/wrapContainer.css";
import Background from "./Background";
import Highlights from "./Highlights";

function WrapContainer() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="main-content">
              <div className="entry-content">
                <Background />
                <Highlights />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrapContainer;
