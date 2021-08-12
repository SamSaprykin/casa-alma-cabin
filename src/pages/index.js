import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { fadeIn } from "../components/animations"

import Header from "../components/header.js"
import MobileTabletFooter from "../components/MobileTabletFooter.js"

import HeroImg from "../images/hero-media/Cabin_Bedroom-min.jpg"
import HeroVideo from "../images/hero-media/Walk-in-and-Deck-Video-compressed.mp4"

import SectionOneWelcome from "../components/SectionOneWelcome.js"
import SectionTwoOutside from "../components/SectionTwoOutside.js"
import SectionThreePlentyOfRoom from "../components/SectionThreePlentyOfRoom.js"
import SectionFourAmenities from "../components/SectionFourAmenities.js"
import SectionFiveGallery from "../components/SectionFiveGallery.js"
import SectionSixInstagram from "../components/SectionSixInstagram.js"

const HeroContainer = styled.div`
  // border: 1px dotted white;
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;

  h2,
  h3 {
    // border: 1px solid pink;
    opacity: 0;
    ${fadeIn}
  }

  h2 {
    margin-left: 34.4vw;

    margin-top: -23.5vh;
    height: 95px;
    width: 335px;

    -webkit-animation: fadeIn 0.3s ease-in 1s forwards;
    animation: fadeIn 0.3s ease-in 1s forwards;
  }

  h3 {
    margin-left: 14.65vw;
    margin-top: -23.5vh;
    height: 69px;
    width: 453px;

    -webkit-animation: fadeIn 0.7s ease-in 1s forwards;
    animation: fadeIn 0.7s ease-in 1s forwards;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      margin: 0;
      margin-bottom: 48px;
    }

    h3 {
      margin: 0;
    }

    h2,
    h3 {
      margin-left: 85px;
    }
  }

  @media screen and (max-width: 640px) {
    h2,
    h3 {
      margin-left: 35px;
    }

    h3 {
      height: 61px;
      width: 81vw;
    }
  }
`

const HeroVideoContainer = styled.div`
  // border: 1px dotted pink;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  opacity: 0;
  ${fadeIn}

  -webkit-animation: fadeIn 0.7s ease-in 1s forwards;
  animation: fadeIn 0.7s ease-in 1s forwards;

  video {
    // border: 1px dotted pink;
    position: absolute;
    // top: -400px;
    // left: -400px;
    min-width: 100%;
    min-height: 100%;
    // width: 190%;
    // height: 190%;

    top: -40%;
    left: -40%;

    width: 180%;
    height: 180%;
  }

  @media screen and (max-width: 1024px) {
    video {
      top: -10%;
      left: -50%;
      width: auto;
      height: 120%;
    }
  }

  @media screen and (max-width: 640px) {
    video {
      top: -20%;
      left: -170%;
      width: auto;
      height: auto;
    }
  }
`

const HeroImgContainer = styled.div`
  // border: 1px dotted pink;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  opacity: 0;
  ${fadeIn}

  -webkit-animation: fadeIn 1s ease-in 1s forwards;
  animation: fadeIn 1s ease-in 1s forwards;

  background-image: url(${HeroImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

const HeroMediaOverlay = styled.div`
  // border: 1px dotted pink;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: black;
  opacity: 0.65;
`

const HeroLineDecoration = styled.div`
  position: absolute;
  bottom: 28.71px;
  height: 59.27px;
  width: 1px;
  background-color: white;
  left: 50vw;

  opacity: 0;
  ${fadeIn}
  -webkit-animation: fadeIn 0.7s ease-in 1s forwards;
  animation: fadeIn 0.7s ease-in 1s forwards;

  @media screen and (max-width: 1024px) {
    left: 50vw;
  }

  @media screen and (max-width: 640px) {
    bottom: 36.71px;
  }
`

const SectionsContainer = styled.div`
  // border: 1px solid white;
  width: 69vw;
  height: 100%;

  // 1920 responsive weirdness
  margin-left: 34.4vw;

  @media screen and (max-width: 1024px) {
    margin-left: 9.8vw;
    width: 90.2vw;
  }

  @media screen and (max-width: 640px) {
    width: 81vw;
    margin: 0 auto;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Casa Alma Cabin" />
    <Header></Header>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <HeroContainer>
        <HeroImgContainer></HeroImgContainer>
        <HeroVideoContainer>
          <video autoPlay loop muted>
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </HeroVideoContainer>
        <HeroMediaOverlay></HeroMediaOverlay>

        <h2>alma:</h2>
        <h3>
          (1)To lift the spirit.<br></br>(2)To feed one’s soul.
        </h3>
        <HeroLineDecoration></HeroLineDecoration>
      </HeroContainer>
    </ScrollAnimation>

    {/* body sections */}
    <SectionsContainer>
      <SectionOneWelcome></SectionOneWelcome>
      <SectionTwoOutside></SectionTwoOutside>
      <SectionThreePlentyOfRoom></SectionThreePlentyOfRoom>
      <SectionFourAmenities></SectionFourAmenities>
      <SectionFiveGallery></SectionFiveGallery>
      <SectionSixInstagram></SectionSixInstagram>
      <MobileTabletFooter></MobileTabletFooter>
    </SectionsContainer>
  </Layout>
)

export default IndexPage
