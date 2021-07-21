import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";
import AliceCarousel from "react-alice-carousel";
import krispy from "./../assets/krispy.png";
import liscios from "./../assets/liscios.png";
import njlot from "./../assets/njlot.jpg";
import dietz from "./../assets/dietz.png";
import home1 from "./../assets/home1.JPG";
import home2 from "./../assets/home2.JPG";
import home3 from "./../assets/home3.JPG";
import home4 from "./../assets/home4.jpg";
import home5 from "./../assets/home5.jpg";
import food1 from "./../assets/food1.jpg";
import about1 from "./../assets/about1.jpg";

const imgSources = [home1, home2, home3, home4, home5];

export default function Home() {
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const images = imgSources.map((url, idx) => {
    return <img src={url} alt="" key={idx} className="carImg"></img>;
  });

  return (
    <main>
      <h1 className="home-main-heading">Welcome To Newfield Food Mart</h1>
      <h2 className="hiring">
        Now Hiring! Newfield Foodmart is seeking an employee to fill a cook
        position.
      </h2>
      <AliceCarousel
        items={images}
        responsive={responsive}
        autoPlayInterval={6000}
        autoPlayDirection="ltr"
        autoPlay={true}
        infinite={true}
        animationType="slide"
        disableButtonsControls={true}
        autoPlayStrategy="none"
      />
      <section className="store">
        <div className="store-flex">
          <div className="store-info">
            <h2 className="serving">
              Serving Our Community with Premium Products
            </h2>
            <p>
              Newfield Food Mart serves the greater Newfield area with premium
              quality goods and services. We offer artisan meats and cheeses
              provided by Dietz & Watson and Liscio's bakery bread at our deli,
              along with a host of other affordable meal options. Newfield Food
              mart is also your one stop shop for groceries, beverages, tobacco
              products, CBD products, and anything else you might need to get
              through your day! Visit us at the intersection of Main road and
              Harding Highway today!
            </p>
            <Link className="store-button" to="/store">
              Explore Our Store
            </Link>
          </div>
          <div className="store-logos">
            <img
              src={krispy}
              alt="krispy chicken logo"
              className="store-logo"
            ></img>
            <img
              src={dietz}
              alt="krispy chicken logo"
              className="store-logo"
            ></img>
            <img
              src={liscios}
              alt="krispy chicken logo"
              className="store-logo"
            ></img>
            <img
              src={njlot}
              alt="krispy chicken logo"
              className="store-logo"
            ></img>
          </div>
        </div>
      </section>
      <section className="menu-about">
        <div className="menu-about-section">
          <h2>Fresh Food</h2>
          <img src={food1}></img>
          <Link className="store-button" to="/menu">
            See Menu
          </Link>
        </div>
        <div className="menu-about-section">
          <h2>About Us</h2>
          <img src={about1}></img>
          <Link className="store-button" to="/about">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
