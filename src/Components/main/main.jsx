import Partners from "../partners/partners";
import Header from "./../header/header";
import Promo from "./../promo/promo";
import GradientCircle from "./gradientCircle/gradientCircle";
import SecondaryNav from "./secondaryNav/secondaryNav";
import Cards from './cards/cards';

import styles from "./main.module.css";
import ButtonExplore from "./buttonExplore/buttonExplore";
import Frames from "./frames/frames";
import TitleOfLinks from "./titleOfLinks/titleOfLinks";
import LinkContainer from "./linkContainer/linkContainer";
import OurDifferens from "./ourDifferens/ourDifferens";
import Testimonails from "./testimonails/testimonails";
import HowToJoin from "./howToJoin/howToJoin";
import Footer from "./footer/footer";


const Main = () => {
  return (
    <div className={styles.main}>
      <GradientCircle />
      <Header />
      <Promo />
      <Partners/>
      <SecondaryNav />
      <Cards />
      <ButtonExplore />
      <Frames/>
      <TitleOfLinks/>
      <LinkContainer/>
      <OurDifferens/>
      <Testimonails/>
      <HowToJoin/>
      <Footer/>
    </div>
  );
};

export default Main;
