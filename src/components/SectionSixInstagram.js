import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"

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
  // border: 1px solid pink;
  margin-top: 29.4vh;
  margin-bottom: 30px;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 22.4vh;
    margin-bottom: 43px;
  }

  @media screen and (max-width: 640px) {
    width: 110%;
    margin-bottom: 16px;
  }
`

const IgContainer = styled.div`
  // border: 1px solid pink;
  width: 140%;
  height 100%;

  margin-bottom: 11.5vh;

  display: flex;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10.25vh;
  }

  @media screen and (max-width: 640px) {
    width: 350%;
    // margin-bottom: 24.2vh;
  }
`

const Post = styled.div`
  // border: 1px dotted pink;
  margin-right: 15px;
  width: 100%;
  height: 100%;
`

const SectionSixInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 292) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Heading>
          Follow along{" "}
          <a target="_blank" href="https://www.instagram.com/casaalmacabin/">
            @casaalmacabin
          </a>
        </Heading>
        <IgContainer>
          {data.allInstaNode.edges.map((post, index) => (
            <Post key={index}>
              <a
                href="https://www.instagram.com/casaalmacabin/"
                target="_blank"
              >
                <Img fluid={post.node.localFile.childImageSharp.fluid} />
              </a>
            </Post>
          ))}
        </IgContainer>
      </ScrollAnimation>
    </Container>
  )
}

export default SectionSixInstagram

// const SectionSixInstagram = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allInstagramContent(limit: 6, sort: { fields: timestamp, order: DESC }) {
//         edges {
//           node {
//             id
//             media_url
//             timestamp
//             localImage {
//               childImageSharp {
//                 fluid(maxWidth: 292) {
//                   ...GatsbyImageSharpFluid_noBase64
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Container>
//       <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
//         <Heading>
//           Follow along{" "}
//           <a target="_blank" href="https://www.instagram.com/casaalmacabin/">
//             @casaalmacabin
//           </a>
//         </Heading>
//         <IgContainer>
//           {data.allInstagramContent.edges.map((post, index) => (
//             <Post key={index}>
//               <a
//                 href="https://www.instagram.com/casaalmacabin/"
//                 target="_blank"
//               >
//                 <Img fluid={post.node.localImage.childImageSharp.fluid} />
//               </a>
//             </Post>
//           ))}
//         </IgContainer>
//       </ScrollAnimation>
//     </Container>
//   )
// }

// export default SectionSixInstagram
