var path = require('path');

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


module.exports = {
  i18n: {
    locales: ['en-US', 'ja'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },

  async redirects() {
    return [
      {
        // this matches '/' since `en` is the defaultLocale
        source: '/en-US',
        destination: '/en-US/',
        locale: false,
        permanent: true,
      },
    ]
  },

  trailingSlash: true,
  // experimental: {
  //   optimizeFonts: true,
  // },
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/works": { page: "/works" },
      "/contact": { page: "/contact" },
      "/contact/thankyou": { page: "/contact/thankyou" },
    };

    const res = await client.getEntries({
      content_type: "portfolio",
      order: "-fields.score",
    });

    res.items.forEach(post => {
      paths[`/works/${post.fields.slug}`] = {
        page: "/works/[id]",
        query: { slug: post.fields.slug }
      };
    });

    return paths;
  },

  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },

    entry: './pages/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    images: {
      path: '/_next/image',
      domains: ['yasmro.netlify.app', 'images.ctfassets.net'],
    },

    mode: 'development', // 開発モード
    devtool: 'source-map', // ソースマップファイル出力
    
};
