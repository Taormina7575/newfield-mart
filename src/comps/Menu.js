import React from "react";
import "./../styles/Menu.css";
import AliceCarousel from "react-alice-carousel";
import newMen from "./../assets/newMen.png";
import krispymenu from './../assets/krispymenu.png'
import delimenu from './../assets/delimenu.jpg'
import men1 from './../assets/men1.jpg'
import men2 from './../assets/men2.jpg'
import men3 from './../assets/men3.jpg'
import men4 from './../assets/men4.jpg'
import men5 from './../assets/men5.jpg'

export default function Menu() {
  const imgSources = [
    men1,
    men2,
    men3,
    men4,
    men5,
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const images = imgSources.map((url, idx) => {
    return <img src={url} alt="Newfield Food Mart" key={idx} className="carImg"></img>;
  });

  return (
    <main>
      <h1 className="menu-main-heading">Heavenly Food for Hungry People</h1>
      <p className='main-subtext'>**Now Supporting DoorDash!</p>
      <section className="menu-link">
        <div className="menu-link-section">
          <h2>Newfield Originals</h2>
        </div>
      </section>
      <section id="newfield-menu">
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
        <img src={newMen} alt="Newfield Food Mart Menu"></img>
      </section>
      <section id='deli-menu'>
        <div className="deli-heading">
          <h2>Deli menu</h2>
        </div>
        <img src={delimenu} alt="Deli Menu"></img>
      </section>
      <section id="krispy-menu">
        <div className='krispy-header'>
        <h2>Krispy Krunchy Chicken</h2>
        </div>
        <img src={krispymenu} alt="Krispy Chicken Menu"></img>
      </section>
    </main>
  );
}
