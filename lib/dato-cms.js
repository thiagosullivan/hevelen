const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = 'a68d3210e8a62ac39de583f0ce90e8';

async function fetchCmsAPI(query, { variables } = {}){
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts(){
  const data = await fetchCmsAPI(`
    {
      allPosts {
        id
        title
        slug
        postAuthor {
          authorImg {
            url
          }
          name
          socialMedia
        }
        postCategory {
          categoryName
          categorySlug
        }
        createdAt
        resume
        text
        postImg {
          url
        }
        video
      }
    }
  `);
  
  return data.allPosts;
}

export async function getAllAuthors(){
  const data = await fetchCmsAPI(`
    {
      allAuthors {
        id
        name
        _status
        _firstPublishedAt
      }
    }
  `);
  
  return data.allAuthors;
}

export async function getAllCategories(){
  const data = await fetchCmsAPI(`
    {
      allCategories {
        categoryName
        categorySlug
      }
    }
  `);
  
  return data.allCategories;
}

export default { getAllPosts, getAllAuthors, getAllCategories };