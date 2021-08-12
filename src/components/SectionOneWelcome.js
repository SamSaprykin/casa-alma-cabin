import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"

import RightImg from "../images/section-1-welcome/Cabin_EXT-min.jpg"
import LeftImg from "../images/section-1-welcome/Shop_Cabin_Patio_Upper-min.jpeg"

const Container = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;

  margin-top: 121px;

  @media screen and (max-width: 640px) {
    margin-top: 63px;
  }
`

const LeftContainer = styled.div`
  // border: 1px solid pink;
  width: 100%;
  height: 100%;

  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const LeftTextContainer = styled.div`
  // border: 1px solid pink;
  width: 35.9%;

  h4 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 23.65vh;
  }

  @media screen and (max-width: 1024px) {
    width: 43.5%;

    h4 {
      margin-bottom: 21px;
    }

    p {
      margin-bottom: 10.5vh;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const LeftImgContainer = styled.div`
  // border: 1px solid pink;
  margin-left: -34.4vw;
  height: 1068px;

  height: 98.9vh;

  width: 63.3vw;

  background-image: url(${LeftImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10% 50%;

  @media screen and (max-width: 1024px) {
    margin-left: -9.8vw;
    width: 44vw;
    height: 560px;

    background-position: 30% 50%;
  }

  @media screen and (max-width: 640px) {
    width: 140%;
    height: 478px;
  }
`

const TextImgDivider = styled.div`
  width: 13%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 2%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 81px;
  }
`

const RightContainer = styled.div`
  // border: 1px solid pink;
  width: 51%;

  @media screen and (max-width: 1024px) {
    width: 54.3%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const RightImgContainer = styled.div`
  // border: 1px solid pink;
  width: 100%;
  height: 1072px;

  height: 99.3vh;

  margin-bottom: 7.45vh;

  background-image: url(${RightImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    height: 651px;
    margin-bottom: 7.6vh;
  }

  @media screen and (max-width: 640px) {
    height: 458px;
    background-position: 100% 50%;
    margin-bottom: 0;
  }
`

const RightTextContainer = styled.div`
  // border: 1px solid pink;
  width: 75%;

  h4 {
    margin-bottom: 1.9vh;
  }

  p {
    font-family: "Roboto Mono", monospace;
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 29px;
    font-weight: 400;
  }

  @media screen and (max-width: 1024px) {
    h4 {
      margin-bottom: 2vh;
    }

    p {
      font-size: 10px;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 640px) {
    order: -1;
    width: 100%;

    h4 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 81px;
    }
  }
`

const SectionOneWelcome = () => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <LeftContainer>
        <LeftTextContainer>
          <h4>
            Welcome to a one-of-a-kind private lakefront property, just a
            stone’s throw away from the GTA.
          </h4>
          <p>
            Contemporary design collides with nature’s own to create a
            transformative space that relaxes and reinvigorates one breathtaking
            moment after the next. Experience a curated canvas of minimalistic
            interiors upon which light dances as sunrise and sunset imprint
            their unforgettable mark, leaving you nothing short of inspired.
          </p>

          <Parallax y={["-40px", "40px"]}>
            <LeftImgContainer></LeftImgContainer>
          </Parallax>
        </LeftTextContainer>
        <TextImgDivider></TextImgDivider>

        <RightContainer>
          <Parallax y={["-40px", "40px"]}>
            <RightImgContainer></RightImgContainer>
          </Parallax>

          <RightTextContainer>
            <h4>“The light is dancing. It’s so magical here!”</h4>
            <p>@thalita.murray</p>
          </RightTextContainer>
        </RightContainer>
      </LeftContainer>
    </ScrollAnimation>
  </Container>
)

export default SectionOneWelcome
