// import Navbar from "../components/Navbar";
// import styles from "../styles/index.module.css";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.brand_box}>
//         <Navbar />
//       </div>

//       <div className={styles.text_box}>
//         <h1 className={styles.heading_primary}>
//           <span className={styles.heading_primary_main}>
//             Welcome to the world of ReactJS
//           </span>
//           <span className={styles.thapatext}>Love with JavaScript</span>
//         </h1>
//         <a
//           href="#"
//           className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>
//        Umair Sadiq
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../styles/header.module.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const header = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default header;
