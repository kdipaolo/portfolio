module.exports = {
  siteMetadata: {
    title: 'Kurt DiPaolo',
    pathPrefix: 'https://www.kurtdipaolo.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:100,300,400,400,700`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
