export const SITENAME = 'Yu Ohno\'s site 2020';

// set client

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// get data
export async function getData(props, order="",locale="en-US") {
    const entries = await client.getEntries({
      content_type: props,
      order: order,
      locale: locale
    });
    if (entries.items) {
      return entries.items;
    }
    console.log(`Error getting Entries for ${props}.`);
  }

// get about
export async function getAbout() {
  const entries = await client.getEntries({
    content_type: "about",
    locale: "ja"
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get all posts
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "portfolio",
    order: "-fields.score",
  });
      // content_type: "post",
    // order: "-fields.date",
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a post by slug
export async function getPostBySlug(slug,locale="en-US") {
  const entries = await client.getEntries({
    content_type: "portfolio",
    limit: 1,
    "fields.slug[in]": slug,
    locale: locale
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest posts
export async function getMorePosts(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 3,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

function parsePostSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}
