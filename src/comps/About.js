import React from "react";
import "./../styles/About.css";
import gal1 from "./../assets/gal1.jpg";
import gal2 from "./../assets/gal2.jpg";
import gal3 from "./../assets/gal3.jpg";
import gal4 from "./../assets/gal4.jpg";
import gal5 from "./../assets/gal5.jpg";
import gal6 from "./../assets/gal6.jpg";
import fam1 from "./../assets/fam1.jpg";
import friendfam from "./../assets/friend-fam.jpg";

const imgSources = [gal1, gal2, gal3, gal4, gal5, gal6];

export default function About() {
  return (
    <main>
      <section className="about-content">
        <h1 className="about-main-heading">The Newfield Food Mart Story</h1>
        <div className="famImg">
          <img src={fam1} alt="Newfield Food Mart Family" className="about-intro-img"></img>
          <img src={friendfam} alt="Family of Priyank" className="about-intro-img"></img>
        </div>
        <h2>Our Journey</h2>
        <p>
          Jignesh Patel, otherwise known as Jimmy, was born in India and moved
          to America in 2007. Upon arriving in America he studied at the
          University of Virginia, and then entered the workforce. He worked a
          variety of jobs in convience stores, gas stations, etc. He also worked
          in hospitality at a motel for three years, while saving up to fund his
          future buisness ventures. In 2018 he married his current wife, Stuti
          Patel. The following year she joined Jignesh in America, and they had
          their first son, Ayaan, or God's Gift. In 2020 a friend of Jignesh,
          Priyank Patel informed him of the store location where Newfield Food
          Mart now sits, which was empty at the time. Jignesh brought his wife
          and mother to check the place out, and they decided the place was
          suitable. Jignesh entered a partnership with Priyank and together they
          opened Newfield Food Mart. Now he is gradually expanding, offering new
          items and services, such as Krispy Krunchy Chicken. He serves the
          Newfield community everyday and has built relationships with many
          local residents who appreciate the service, conversation, and
          friendship of him and his family.
        </p>
        <h2>Gallery</h2>
        <div className="gallery-container">
          {imgSources.map((imgSrc, idx) => {
            return (
              <img
                src={imgSrc}
                key={idx}
                alt="Newfield Food Mart"
                className="gallery-image"
              ></img>
            );
          })}
        </div>
      </section>
      <h2 className="hiring">
        Now Hiring! Newfield Foodmart is seeking an employee to fill a cook
        position.
      </h2>
    </main>
  );
}
