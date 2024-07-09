import React, { useState, useEffect } from "react"

import styled from "styled-components"

import CabinLogo from "../images/Cabin_Logo_WHT_cropped.png"

const Container = styled.div`
  // border: 1px solid blue;

  position: fixed;
  z-index: 1;

  width: 32vw;
  height: 100%;

  @media screen and (max-width: 1024px) {
    &.black {
      background-color: black;
      transition: all 0.2s ease-in-out;
    }
    width: 100%;
    height: 12vh;
    height: 18vw;
  }

  @media screen and (max-width: 640px) {
    height: 40vw;
    height: 39vw;
  }
`

const ContentContainer = styled.div`
  // border: 1px solid red;
  height: 100vh;

  width: 21.65vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 10.35vw;

  @media screen and (max-width: 1024px) {
    width: 80.4vw;
    height: 100%;

    margin-left: 9.8vw;
    margin-right: 9.8vw;
    margin-top: 43px;

    flex-direction: row;
    align-items: center;
  }
`

const MainTextContainer = styled.div`
  // border: 1px dotted red;

  margin-top: 16.7vh;

  @media screen and (max-width: 1024px) {
    margin-top: 43px;
    margin-top: 0;
    width: 140px;
    height: 100%;
  }
`

const Heading = styled.h1`
  // border: 1px dotted pink;

  display: none;

  // width: 224px;
  width: 250px;

  margin-bottom: 26px;

  @media screen and (max-width: 1024px) {
    // width: 140px;
    width: 160px;
    margin-bottom: 0;

    line-height: 57px;
  }
`

const LogoContainer = styled.div`
  // border: 1px dotted pink;

  // display: none;

  background-image: url(${CabinLogo});
  background-repeat: no-repeat;
  background-size: contain;
  // background-size: 143%;
  background-position: 50% 50%;

  width: 218px;
  height: 87px;

  margin-bottom: 26px;

  @media screen and (max-width: 1024px) {
    width: 134px;
    height: 57px;
    margin-bottom: 0;
  }
`

const Description = styled.p`
  // border: 1px dotted pink;

  width: 224px;
  text-align: center;

  margin-bottom: 78px;

  font-family: "Optima LT W01 Roman";
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 17px;

  span {
    font-style: italic;
  }

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    width: 140px;
    font-size: 8px;
    letter-spacing: 0.8px;
    line-height: 10px;

    margin-bottom: 0;
  }
`

const BookButton = styled.button`
  // border: 1px dotted pink;

  width: 218px;
  height: 43px;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 19px;

  border: 1px solid white;
  border-radius: 22px;
  color: white;
  background: transparent;

  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const MobileTabletBookButton = styled(BookButton)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 134px;
    height: 28px;

    font-size: 10px;
    letter-spacing: 1px;
    line-height: 10px;
  }
`

const Info = styled.div`
  // border: 1px solid white;

  margin-bottom: 14.2vh;

  font-family: proxima-nova, sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 1.2px;
  line-height: 18px;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

function Header() {
  const [header, setHeader] = useState("header")

  const listenScrollEvent = event => {
    if (window.scrollY < window.innerHeight) {
      return setHeader("")
    } else if (window.scrollY > window.innerHeight) {
      return setHeader("black")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <Container className={header}>
      <header>
        <ContentContainer>
          <MainTextContainer>
            <Heading>cābin</Heading>
            <LogoContainer></LogoContainer>
            <Description>
              <span>by </span>
              <a href="https://casaalma.ca/" target="_blank">
                casa alma
              </a>
            </Description>
            <a
              href="https://www.airbnb.ca/rooms/51885141"
              target="_blank"
              style={{ textDecoration: `none` }}
            >
              <BookButton>Book your stay</BookButton>
            </a>
          </MainTextContainer>
          <a
            href="https://www.airbnb.ca/rooms/51885141"
            target="_blank"
            style={{ textDecoration: `none` }}
          >
            <MobileTabletBookButton>Book your stay</MobileTabletBookButton>
          </a>

          <Info>
            <a href="tel:647–832–6887">647–832–6887</a>
            <br></br>
            <a href="mailto:ilove@casaalma.ca">ilove@casaalma.ca</a>
            <br></br>
            <br></br>
            440-5427 Young St,<br></br>Harwood ON,Canada<br></br>K0K2H0
          </Info>
        </ContentContainer>
      </header>
    </Container>
  )
}

export default Header
