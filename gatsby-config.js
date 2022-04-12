module.exports = {
  siteMetadata: {
    title: `✌️  ThatDarnPat`,
    description: `Patrick Lindsay is a bookworm, musician, sandwich enthusiast and software engineer based in Florence, AL.`,
    author: `@thatdarnpat`,
    job: {
      employer: 'Fastly',
      title: 'Senior Software Engineer',
      url: 'https://fastly.com',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `ThatDarnPat`,
        short_name: `ThatDarnPat`,
        start_url: `/`,
        background_color: `#a640bf`,
        theme_color: `#c76ba8`,
        display: `minimal-ui`,
        icon: `src/images/pat-emoji.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-svg`,
  ],
};
