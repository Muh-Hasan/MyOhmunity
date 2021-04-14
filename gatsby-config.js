const myCustomQueries = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  l: "(max-width: 1280px)",
  xl: "(max-width: 1536px)",
}

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
}
