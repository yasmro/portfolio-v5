var path = require('path');
var lib = require('./lib');

module.exports = {
  exportTrailingSlash: true,

  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/works": { page: "/works" },
      "/contact": { page: "/contact" },
    };

    const res = await lib.getAllPosts();
    res.forEach(post => {
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
