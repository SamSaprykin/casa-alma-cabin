import * as React from "react"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"

const Container = styled.div`
  // border: 1px solid white;
  width: 90%;
  height: 100%;

  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Info = styled.div`
  // border: 1px solid white;

  display: flex;
  justify-content: space-between;

  margin-bottom: 6vh;

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

  @media screen and (max-width: 640px) {
    margin-bottom: 8vh;
  }
`

const MobileTabletFooter = () => (
  <Container>
    <Info>
      <div>
        <a href="tel:647–832–6887">647–832–6887</a>
        <br></br>
        <a href="mailto:ilove@casaalma.ca">ilove@casaalma.ca</a>
      </div>
      <div>
        440-5427 Young St,<br></br>Harwood ON,Canada<br></br>K0K2H0
      </div>
    </Info>
  </Container>
)

export default MobileTabletFooter
