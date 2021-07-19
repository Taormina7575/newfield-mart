import React from "react";
import "./../styles/Store.css";
import AliceCarousel from "react-alice-carousel";
import store1 from './../assets/store1.jpg'
import store2 from './../assets/store2.jpg'
import store3 from './../assets/store3.jpg'
import store4 from './../assets/store4.jpg'
import store5 from './../assets/store5.jpg'
import feature1 from './../assets/feature1.jpg'
import menu1 from './../assets/menu1.jpg'
import vape1 from './../assets/vape1.jpg'
import service1 from './../assets/service1.jpg'
import lottery1 from './../assets/lottery1.jpg'

export default function Store() {
  const imgSources = [
    store1,
    store2,
    store3,
    store4,
    store5
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const images = imgSources.map((url, idx) => {
    return <img src={url} alt="" key={idx} className="carImg"></img>;
  });

  return (
    <main>
      <h1 className="store-main-heading">You Need It, We Have It!</h1>
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
      <section className='feature'>
        <div className='feature-info'>
            <h2>Our Selection</h2>
            <ul>
                <li>NJ Lottery Services</li>
                <li>Deli, Homemade Food, and Krispy Krunchy Chicken</li>
                <li>Tobacco, Incense, CBD, etc.</li>
                <li>ATM, Firewood, Propane, and Automotive Supplies</li>
            </ul>
        </div>
        <div className='feature-image'>
            <img src={feature1} alt='krispy chicken logo' className='store-picture-feature'></img>
        </div>
      </section>
      <section className='store-sections'>
        <div className='store-section-category'>
            <h2>Feeling Lucky?</h2>
            <img src={lottery1} alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>Large Variety of Lottery Tickets</li>
                    <li>Lottery Ticket Scanner</li>
                    <li>Powerball</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Head Shop</h2>
            <img src={vape1} alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>Tobacco and Vaporizer Products</li>
                    <li>CBD, Kratom, etc.</li>
                    <li>Bongs, Bowls, Pipes, etc.</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Food and Refreshment</h2>
            <img src={menu1} alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>Deli, Artisan Meats and Cheeses</li>
                    <li>Homemade Food and Krispy Chicken</li>
                    <li>A Large Variety of Snacks/Sides</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Assorted Services</h2>
            <img src={service1} alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>ATM Machine</li>
                    <li>Firewood and Propane</li>
                    <li>Automotive Fluids</li>
                </ul>
            </div>
        </div>
      </section>
    </main>
  );
}
