import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"

import LeftImg from "../images/section-2-outside/Shop_Cabin_Patio-min.jpeg"
import RightImg from "../images/section-2-outside/Cabin_EXT_Front-min.jpg"

const Container = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;
`

const TextContainer = styled.div`
  // border: 1px solid pink;
  display: flex;
  align-items: center;
  height: 66vh;

  @media screen and (max-width: 1024px) {
    height: 44.1vh;
  }

  @media screen and (max-width: 640px) {
    height: 70.4vh;
  }
`

const InnerTextContainer = styled.div`
  // border: 1px solid white;
  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`

const Heading = styled.h4`
  // border: 1px solid pink;
  height: 198px;
  width: 31.4vw;

  @media screen and (max-width: 1024px) {
    height: 122px;
    width: 328px;

    width: calc(43.8vw - 9.8vw);
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Paragraph = styled.p`
  // border: 1px solid pink;
  height: 164px;
  width: 15.3vw;

  @media screen and (max-width: 1024px) {
    height: 105px;
    width: 328px;

    width: calc(43.8vw - 9.8vw + 5.7vw);
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Spacing = styled.div`
  // border: 1px solid pink;
  width: 16px;
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 6.9vw;
  }

  @media screen and (max-width: 640px) {
    height: 40px;
    width: 100%;
  }
`

const ImgContainer = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 874px;

  height: 81vh;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    height: 284px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 71vh;
    height: 100%;

    flex-direction: column;
  }
`

const LeftImgContainer = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;

  margin-left: -34.4vw;
  width: 29.7vw;

  background-image: url(${LeftImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 53% 50%;

  @media screen and (max-width: 1024px) {
    margin-left: -9.8vw;
    width: 43.8vw;

    background-position: 100% 50%;
  }

  @media screen and (max-width: 640px) {
    width: 112%;
    height: 284px;
    margin-bottom: 40px;
  }
`

const RightImgContainer = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;

  background-image: url(${RightImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    width: 49.3vw;
  }

  @media screen and (max-width: 640px) {
    margin-left: -9.8vw;
    width: 125%;
    height: 250px;
  }
`

const SectionTwoOutside = () => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <TextContainer>
        <InnerTextContainer>
          <Heading>
            Outside, three levels of outdoor lounge-scapes are ideal settings to
            laze, laugh and love.
          </Heading>
          <Spacing></Spacing>
          <Paragraph>
            The lake-level, bedroom walk-out or tree-top patios provide ample
            opportunity to thrive like the wilderness that envelopes you.
          </Paragraph>
        </InnerTextContainer>
      </TextContainer>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-40px", "40px"]}>
        <ImgContainer>
          <LeftImgContainer></LeftImgContainer>
          <RightImgContainer></RightImgContainer>
        </ImgContainer>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default SectionTwoOutside
