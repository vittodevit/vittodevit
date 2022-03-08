module.exports = {
  siteMetadata: {
    title: `Vittorio Lo Mele`,
    siteUrl: `https://vitto.dev`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
