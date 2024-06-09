import React from "react";
import "../styles/highlights.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Highlights() {
  const settings = {
    infinite: true,
    dots: false, // Hide the dots
    arrows: false, // Hide the arrows
    speed: 500,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "https://24estate.in/chandakchembureast/wp-content/uploads/imj3.webp",
    "https://24estate.in/chandakchembureast/wp-content/uploads/imj4.webp",
    "https://24estate.in/chandakchembureast/wp-content/uploads/chandak-chembur1-1.webp",
    "https://24estate.in/chandakchembureast/wp-content/uploads/imj1-1.webp",
    "https://24estate.in/chandakchembureast/wp-content/uploads/imj2.webp",
  ];

  const tableData = [
    { type: "1 BHK", carpetArea: "On Request", price: "₹ 99 Lacs*" },
    { type: "2 BHK", carpetArea: "On Request", price: "On Request" },
    { type: "3 BHK", carpetArea: "On Request", price: "On Request" },
  ];

  return (
    <div
      id="home"
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
      style={{
        position: "relative",
        left: "-302.5px",
        boxSizing: "border-box",
        width: "1349px",
        maxWidth: "1349px",
        paddingLeft: "89.5px",
        paddingRight: "89.5px",
      }}
      data-rtl="false"
      data-row-effect-mobile-disable="true"
    >
      <div
        className="upb_row_bg"
        data-bg-override="0"
        style={{
          background: "rgb(243, 234, 218)",
          minWidth: "1349px",
          left: "0px",
          width: "1348px",
        }}
      ></div>

      <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "85px" }}>
              <span className="vc_empty_space_inner"></span>
            </div>
            <div
              id="ultimate-heading-1378665ae631ad8ef"
              className="uvc-heading ult-adjust-bottom-margin ultimate-heading-1378665ae631ad8ef uvc-1162"
              data-hspacer="line_only"
              data-halign="center"
              style={{ textAlign: "center" }}
            >
              <div
                className="uvc-main-heading ult-responsive"
                data-ultimate-target=".uvc-heading.ultimate-heading-1378665ae631ad8ef h2"
                data-responsive-json-new='{"font-size":"desktop:35px;","line-height":""}'
              >
                <h2
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: "600",
                    color: "#000000",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  CHANDAK CHEMBUR EAST PROJECT HIGHLIGHTS
                </h2>
              </div>
              <div
                className="uvc-heading-spacer line_only"
                style={{
                  marginTop: "10px",
                  marginBottom: "5px",
                  height: "1px",
                }}
              ></div>
              <hr className="uvc-headings-line" />
              <div
                className="uvc-sub-heading ult-responsive"
                data-ultimate-target=".uvc-heading.ultimate-heading-1378665ae631ad8ef .uvc-sub-heading"
                data-responsive-json-new='{"font-size":"desktop:15px;","line-height":"desktop:23px;"}'
                style={{
                  // fontFamily: "monospace",
                  fontWeight: "600",
                  color: "#000000",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                <p></p>
                <p style={{ textAlign: "center" }}>
                  A New Project in Chembur (E) Designed to Offer a Life of More.
                  Move Into Homes that Provide an Entire,
                  <br /> Nature-Rich Ecosystem Surrounded by Hills on One Side
                  and A Green Canopy on The Other.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wpb_column vc_column_container vc_col-sm-1 vc_hidden-sm vc_hidden-xs">
        <div className="vc_column-inner">
          <div className="wpb_wrapper"></div>
        </div>
      </div>
      <span>1</span>

      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="highlights">
          <ul>
            <li>
              Nature-Blessed <b>1, 2 & 3 BHK</b>
            </li>
            <li>
              Strategically Located in The Heart of <b>Chembur</b>
            </li>
            <li>Multi-Faceted Premium Living</li>
            <li>The Project Offers a Wide Range of Modern Amenities</li>
            <li>
              Proximity to Employment Hubs Like{" "}
              <b>BKC, Andheri and South Mumbai.</b>
            </li>
          </ul>

          <div className="btns">
            <button className="site-visit-btn">Book Site Visit</button>
            <button className="brochure-btn">Request For E-Brochure</button>
          </div>
        </div>
      </div>

      {/* Area, Payment, Offer */}
      <div className="area-offer-payment">
        {/* Area & Pricing */}
        <div className="area-pricing-container">
          <div className="vc-empty-space"></div>
          <h2 className="area-pricing-heading">AREA & PRICING</h2>
          <div className="area-pricing-spacer"></div>

          <div className="area-pricing-table-container">
            <table className="area-pricing-table">
              <thead>
                <tr>
                  <th className="area-pricing-th">Type</th>
                  <th className="area-pricing-th">Carpet Area</th>
                  <th className="area-pricing-th">
                    Price*
                    <br />
                    (Onwards)
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="area-pricing-td">{row.type}</td>
                    <td className="area-pricing-td">
                      <a href="#modal-665ae631b8448">{row.carpetArea}</a>
                    </td>
                    <td className="area-pricing-td">
                      <a href="#modal-665ae631b8448">{row.price}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="button" className="area-pricing-button">
            Get Price Breakup
          </button>

          <div className="vc-empty-space"></div>
        </div>

        {/* Offers */}
        <div className="offers-container">
          <div className="vc-empty-space"></div>

          <div className="offers-subheading">
            <p>
              PAY <span className="offers-highlight">20%</span> NOW &amp; REST{" "}
              <span className="offers-highlight">80%</span> ON POSSESSION*
            </p>
          </div>

          <div className="vc-empty-space"></div>

          <div className="icon-container">
            <img
              className="img-icon"
              alt="Logo"
              src="https://24estate.in/chandakchembureast/wp-content/uploads/LOGO-WHITE-1.webp"
            />
          </div>

          <div className="vc-empty-space"></div>

          <div className="offers-subheading">
            <p>
              GET EARLY BIRD DISCOUNTS*
              <br />
              BOOK HOME PRESENTATION
            </p>
          </div>

          <button type="button" className="enquiry-button">
            Enquiry Now
          </button>

          <div className="vc-empty-space"></div>
        </div>

        {/* Payment Plan */}
        <div className="payment-plan">
          {/* Content for payment plan */}
          <h2 className="area-pricing-heading">PAYMENT PLAN</h2>
          <p>Details about the payment plan...</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
