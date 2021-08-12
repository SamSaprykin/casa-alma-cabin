import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"

const Container = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;
`

const AmenitiesContainer = styled.div`
  // border: 1px solid white;
  width: 100%;

  h4 {
    // border: 1px solid white;
    margin-top: 11.5vh;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1024px) {
    h4 {
      margin-top: 14.1vh;
      margin-bottom: 79px;
    }
  }

  @media screen and (max-width: 640px) {
    h4 {
      margin-top: 22.2vh;
      margin-bottom: 20px;
    }
  }
`

const ListContainer = styled.div`
  // border: 1px solid white;
  width: 100%;

  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const List = styled.ul`
  // border: 1px solid pink;
  list-style-type: "-";
  width: 33%;

  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    width: 44%;
    margin-right: 16px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 0;
  }
`

const QuoteContainer = styled.div`
  // border: 1px solid white;

  width: 45.55%;

  height: 692px;
  height: 64.3vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 100%;

    height: 594px;
    height: 50vh;
  }

  @media screen and (max-width: 640px) {
    height: 491px;
    height: 60.8vh;
  }
`

const Quote = styled.div`
  // border: 1px solid pink;
  width: 100%;
  height: 10vh;

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
    width: 70%;

    h4 {
      // border: 1px solid pink;
      margin-bottom: 21px;
    }

    p {
      // border: 1px solid pink;
      font-size: 10px;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 19vh;

    h4 {
      margin-bottom: 20px;
    }
  }
`

const SectionFourAmenities = () => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <AmenitiesContainer>
        <h4>Amenities</h4>
        <ListContainer>
          <List>
            <li>Two bedrooms with queen size beds</li>
            <li>Bespoke bunkbed</li>
            <li>One and a half baths</li>
            <li>
              Elevated patio and private waterfront with south shore lake views
            </li>
            <li>BBQ and fire pit</li>
          </List>
          <List>
            <li>Built in indoor/outdoor speakers</li>
            <li>Dock (May through October)</li>
            <li>Highspeed internet</li>
            <li>Washer and Dryer</li>
            <li>Newly completed with all modern amenities</li>
          </List>
        </ListContainer>
      </AmenitiesContainer>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <QuoteContainer>
        <Quote>
          <h4>
            “I’m so glad to have found this hidden gem. Can’t wait to come
            back!”
          </h4>
          <p>@miaparresdesign</p>
        </Quote>
      </QuoteContainer>
    </ScrollAnimation>
  </Container>
)

export default SectionFourAmenities
