// set client

const client = require('contentful').createClient({
  space: 'e7muoilmgguu',
  accessToken: 'mVRLrgzLFIgwe3YL3XTV_V_MEF-7YQ1Hyr9k55LJ4-4',
});

// get all posts
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "portfolio"
  });
      // content_type: "post",
    // order: "-fields.date",
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a post by slug
export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "portfolio",
    limit: 1,
    "fields.slug[in]": slug,
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
