import React from "react";
import "./../styles/Menu.css";
import AliceCarousel from "react-alice-carousel";
import newfieldmenu from "./../assets/newfieldmenu.jpg";
import krispymenu from './../assets/krispymenu.png'
import delimenu from './../assets/delimenu.jpg'

export default function Menu() {
  const imgSources = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F02%2F183171-mountain-lake.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F51768-trees-nature-1.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F156478-reflection-river-arch-trees-nature-landscape-water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F11%2FCalm-Desktop-Wallpaper.jpg&f=1&nofb=1",
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
        <img src={newfieldmenu} alt="Newfield Food Mart Menu"></img>
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
