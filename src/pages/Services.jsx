// import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Blogger } from "../components/Blogger";
// import { Stack } from "react-bootstrap";
import Footer from "../components/Footer";
// import { useEffect } from "react";
import Header from "../components/Header";

const Services = () => {
  return (
    <div className="ContainerOtherService">
      <Header />

      <div className="blogMain">
        <div className="goodAfter">
          <p>Blog posts</p>
          <span>Our latest updates and blogs about managing your team</span>
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/Rectangle (3).png")}
            title="The Emotional Toll of Being in UX"
            texts="Bi udriin 10 tsag hicheeld suudag, gertee ireed 3 tsag hicheel hiihed 8 tsag bolson bdg, hool undaa ideed untdag"
            profileImg={require("../images/Avatar (1).png")}
            userName="Enkhbilguun"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/Rectangle (2).png")}
            title="I made It Based on  One of My friend"
            texts="Bi udriin 10 tsag hicheeld suudag, gertee ireed 3 tsag hicheel hiihed 8 tsag bolson bdg, hool undaa ideed untdag"
            profileImg={require("../images/Avatar (2).png")}
            userName="Enkhbilguun"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/Rectangle (1).png")}
            title="So its technically not copying"
            texts="BI hicheeliin suuliin 2 tsagiig murin ENd irj hicheeldee suudag, tiiml ih setgel"
            profileImg={require("../images/Avatar (3).png")}
            userName="Enkhbilguun"
            date="2nd January,2069"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/Rectangle (4).png")}
            title="since I reformed Most of the stuff"
            texts="BI hicheeliin suuliin 2 tsagiig murin ENd irj hicheeldee suudag, tiiml ih setgel"
            profileImg={require("../images/Avatar (4).png")}
            userName="Bek"
            date="2nd January,6922"
          />
          <Blogger
            image={require("../images/Rectangle (1).png")}
            title="SOOO i Expect to Get the marking I deserve."
            texts="BI hicheeliin suuliin 2 tsagiig murin ENd irj hicheeldee suudag, tiiml ih setgel"
            profileImg={require("../images/Avatar (5).png")}
            userName="Bek"
            date="2nd May,2022"
          />
          <Blogger
            image={require("../images/Rectangle (2).png")}
            title="Setgel Mednedeeee TIme bagshaa"
            texts="BI hicheeliin suuliin 2 tsagiig murin ENd irj hicheeldee suudag, tiiml ih setgel"
            profileImg={require("../images/Avatar (1).png")}
            userName="Bek"
            date="69nd January,2022"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/Rectangle (3).png")}
            title="taniig shiten bisherdeg shuu ;DD"
            texts="Negent EBS iig pyalsan, tiimees eniigee chanartai huuhgu bol, tugschuud gulg bolno ;'CC"
            profileImg={require("../images/Avatar (2).png")}
            userName="Benhe"
            date="1st January,2022"
          />
          <Blogger
            image={require("../images/Rectangle (4).png")}
            title="taniig shiten bisherdeg shuu ;DD"
            texts="Negent EBS iig pyalsan, tiimees eniigee chanartai huuhgu bol, tugschuud gulg bolno ;'CC"
            profileImg={require("../images/Avatar (3).png")}
            userName="Benhe"
            date="2nd January,2692"
          />
          <Blogger
            image={require("../images/Rectangle (5).png")}
            title="taniig shiten bisherdeg shuu ;DD"
            texts="Negent EBS iig pyalsan, tiimees eniigee chanartai huuhgu bol, tugschuud gulg bolno ;'CC"
            profileImg={require("../images/Avatar (1).png")}
            userName="Benhe"
            date="2nd SIXTYNINE,2022"
          />
        </div>
        <button className="btnSrvc">Next</button>
        <br />
      </div>
      <Footer />
    </div>
  );
};
export default Services;
