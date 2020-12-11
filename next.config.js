var path = require('path');
module.exports = {
  exportTrailingSlash: true,
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  },

  entry: './pages/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    images: {
      path: '/_next/image',
      domains: ['yasmro.netlify.app'],
    },
    
};
