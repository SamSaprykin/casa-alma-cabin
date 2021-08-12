import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"

import LeftImg from "../images/section-3-plenty-of-room/Design_Element-min.jpeg"
import RightImg from "../images/section-3-plenty-of-room/IMG_7200-min.jpeg"

const Container = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;
`

const TextContainer = styled.div`
  // border: 1px solid pink;
  display: flex;
  align-items: center;
  height: 68vh;

  @media screen and (max-width: 1024px) {
    height: 50.3vh;
  }

  @media screen and (max-width: 640px) {
    height: 75vh;
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
  width: 18vw;

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
    height: 30px;
    width: 100%;
  }
`

const ImgContainer = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 1110px;

  height: 102vh;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    height: 507px;
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
  width: calc(31.4vw + 34.4vw - 3.5vw);

  background-image: url(${LeftImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 53% 50%;

  @media screen and (max-width: 1024px) {
    margin-left: -9.8vw;
    width: 43.8vw;

    background-position: 75% 50%;
  }

  @media screen and (max-width: 640px) {
    width: 130%;
    height: 507px;
    margin-bottom: 87px;

    background-position: 70% 50%;
  }
`

const RightContainer = styled.div`
  // border: 1px solid white;

  width: 36.7vw;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 49.3vw;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const RightImgContainer = styled.div`
  // border: 1px solid white;

  width: 36.7vw;
  height: 609px;

  height: 56.4vh;

  margin-bottom: 7.45vh;

  background-image: url(${RightImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 50%;

  @media screen and (max-width: 1024px) {
    width: 49.3vw;
    height: 278px;

    margin-bottom: 6.7vh;
  }

  @media screen and (max-width: 640px) {
    width: 120%;
    height: 278px;

    background-position: 0% 50%;

    margin-bottom: 0;
  }
`

const RightTextContainer = styled.div`
  // border: 1px solid white;
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
    width: 80%;

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
      margin-bottom: 89px;
    }
  }
`

const SectionThreePlentyOfRoom = () => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <TextContainer>
        <InnerTextContainer>
          <Heading>
            There’s plenty of room to roam (and call home) with accommodations
            for up to six guests.
          </Heading>
          <Spacing></Spacing>
          <Paragraph>
            Upstairs boasts a large open concept kitchen and living space, while
            downstairs features signature sleeping quarters that invite you to
            wrap yourself in their luxurious linens, so you can rise feeling
            renewed.
          </Paragraph>
        </InnerTextContainer>
      </TextContainer>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-40px", "40px"]}>
        <ImgContainer>
          <LeftImgContainer></LeftImgContainer>
          <RightContainer>
            <RightImgContainer></RightImgContainer>
            <RightTextContainer>
              <h4>“I can’t stop sharing pics of your space”</h4>
              <p>@sophiefcoleman</p>
            </RightTextContainer>
          </RightContainer>
        </ImgContainer>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default SectionThreePlentyOfRoom
