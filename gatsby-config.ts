import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `starcoex-gatsby-wordpress`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "JetBrains Mono",
            weights: ["100", "400"],
          },
          {
            family: "Teko",
            weights: ["100..700"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `localhost:8888/`,
        protocol: `http`,
        url: "http://localhost:8080/graphql",
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // "gatsby-plugin-postcss",
  ],
};

export default config;
