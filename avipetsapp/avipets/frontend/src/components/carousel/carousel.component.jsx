import React from "react";
import "../../sass/carousel.scss";

const Carousel = (props) => {
    return (
      <div className="container">
        <div
          key={1}
          id="carouselHero"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselHero"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {props.photo_1 ? (
                <img src={props.photo_1} className="d-block w-100" alt="..." />
              ) : null}
            </div>
            <div className="carousel-item">
              {props.photo_2 ? (
                <img src={props.photo_2} className="d-block w-100" alt="..." />
              ) : null}
            </div>
            <div className="carousel-item">
              {props.photo_3 ? (
                <img src={props.photo_3} className="d-block w-100" alt="..." />
              ) : null}
            </div>
            <div className="carousel-item">
              {props.photo_4 ? (
                <img src={props.photo_4} className="d-block w-100" alt="..." />
              ) : null}
            </div>
            <div className="carousel-item">
              {props.photo_5 ? (
                <img src={props.photo_5} className="d-block w-100" alt="..." />
              ) : null}
            </div>
            <div className="carousel-item">
              {props.photo_6 ? (
                <img src={props.photo_6} className="d-block w-100" alt="..." />
              ) : null}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide="prev"
          >
            <i class="fas fa-chevron-left text-dark fa-lg"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide="next"
          >
            <i class="fas fa-chevron-right text-dark fa-lg"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default Carousel;
