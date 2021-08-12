import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import ImgOne from "../images/section-5-gallery/Casa-Alma-Cabin-147-min.jpg"
import ImgTwo from "../images/section-5-gallery/Cabin_EXT_Front-min.jpg"
import ImgThree from "../images/section-5-gallery/Cabin_Sunset-min.jpg"
import ImgFour from "../images/section-5-gallery/Casa-Alma-Cabin-5-min.jpg"
import ImgFive from "../images/section-5-gallery/Casa-Alma-Cabin-24-min.jpg"
import ImgSix from "../images/section-5-gallery/Casa-Alma-Cabin-31-min.jpg"
import ImgSeven from "../images/section-5-gallery/Casa-Alma-Cabin-88-min.jpg"
import ImgEight from "../images/section-5-gallery/Casa-Alma-Cabin-90-min.jpg"
import ImgNine from "../images/section-5-gallery/Casa-Alma-Cabin-92-min.jpg"
import ImgTen from "../images/section-5-gallery/Casa-Alma-Cabin-100-min.jpg"
import ImgEleven from "../images/section-5-gallery/Casa-Alma-Cabin-105-min.jpg"
import ImgTwelve from "../images/section-5-gallery/Casa-Alma-Cabin-109-min.jpg"
import ImgThirteen from "../images/section-5-gallery/Casa-Alma-Cabin-136-min.jpg"
import ImgFourteen from "../images/section-5-gallery/Casa-Alma-Cabin-143-min.jpg"

const Container = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 640px) {
  }
`

const Heading = styled.h4`
  // border: 1px solid white;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 31px;
  }
`

const GalleryContainer = styled.div`
  // border: 1px solid pink;
  width: 100%;
  height: 100%;

  width: 95%;

  .thumbs-wrapper {
    li {
      border: none;

      :hover {
        border: 1px solid white;
        cursor: pointer;
      }
    }
    .selected {
      border: none;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

function SectionFiveGallery() {
  const images = [
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
    ImgFive,
    ImgSix,
    ImgSeven,
    ImgEight,
    ImgNine,
    ImgTen,
    ImgEleven,
    ImgTwelve,
    ImgThirteen,
    ImgFourteen,
  ]
  const renderCustomThumbs = () => {
    return images.map((image, index) => <img src={image}></img>)
  }

  return (
    <Container>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Heading>The Casa Alma Cabin awaits you.</Heading>
        <GalleryContainer>
          <Carousel
            infiniteLoop
            autoPlay
            dynamicHeight
            interval={4000}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            transitionTime={1000}
            renderThumbs={renderCustomThumbs}
          >
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgOne})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgTwo})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgThree})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgFour})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgFive})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 65%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgSix})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgSeven})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 60%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgEight})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgNine})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgTen})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgEleven})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 70%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgTwelve})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgThirteen})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 30%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${ImgFourteen})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 80%`,
              }}
            >
              <img style={{ opacity: `0` }} src={ImgOne}></img>
            </div>
          </Carousel>
        </GalleryContainer>
      </ScrollAnimation>
    </Container>
  )
}

export default SectionFiveGallery
