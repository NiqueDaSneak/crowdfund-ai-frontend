import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `crowdfund-ai-fronted`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
