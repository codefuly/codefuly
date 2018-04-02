module.exports = {
  siteMetadata: {
    title: 'Codefuly',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:400,900`, // you can also specify font weights and styles
        ],
      },
    },
  ],
}
