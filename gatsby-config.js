module.exports = {
  siteMetadata: {
    title: "PP Template",
    description:
      "This is a Portfolio Site for any Photographers out there! (Please change this!)",
    author: "@droper",
    twitterUsername: "@siemen_subbaiah",
    image: "/twitter-img.png",
    siteUrl: "https://pp-template2.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `28943446`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://pp-template.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: [`Hero-images`, `Gallery`, `Services`, `Skills`],
        singleTypes: [`About`],
      },
    },
  ],
}
