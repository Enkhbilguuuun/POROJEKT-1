import Header from "../components/Header";
import Activities from "../components/Activities";
import ActivitiesTwo from "../components/ActivitiesTwo";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Instant from "../components/Instant";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from "react-bootstrap"

export const Main = () => {
  return (
    <>
      <Header />
      <div className="headerFirst">
        <Instant
          title="Instant collaborations for remote teams"
          text="All in one for your remote team chats, 
          collaboration and track projects"
        />
      </div>
      <Activities
        Texts={
          "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. ~ Marcus Aurelius"
        }
        Title="Your Hub for teamwork"
        Image={require("../images/niceOne.png")}
      />
      <ActivitiesTwo
        TextsTwo={
          "A moment of patience in a moment of anger prevents a thousand moments of regret. ~ Ali ibn Abi Talib"
        }
        TitleTwo="Simple task management"
        ImageTwo={require("../images/niceTwo.png")}
      />
      <Activities
        Texts={
          "A moment of patience in a moment of anger prevents a thousand moments of regret. ~ Ali ibn Abi Talib"
        }
        Title="Scheduling that actually works"
        Image={require("../images/niceThree.png")}
      />
      <Activities
        Texts={
          "i HAVE NOTHING IN MY MIND TO SAY SO IM JUST GONNA TYPE SOME RANDOM SHIT APSKADJOAJBIBDFIAUBS"
        }
        Title="Your Trustworthy BEKA"
        Image={require("../images/niceOne.png")}
      />

      <Comments />
      <Footer />
    </>
  );
};
