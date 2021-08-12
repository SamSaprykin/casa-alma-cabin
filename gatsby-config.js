require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Casa Alma Cabin`,
    description: `Welcome to a one-of-a-kind private lakefront property, just a stone’s throw away from the GTA.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Casa Alma Cabin`,
        short_name: `CasaAlmaCabin`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/favicon-02.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `39639520743`,
        access_token: process.env.INSTAGRAM_TOKEN_EXTENDED,
        instagram_id: "17841439622294940",
        maxPosts: 10,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
