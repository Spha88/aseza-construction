import axios from 'axios';

const fetchData = (query, variables = {}) => {
  return axios({
    method: 'post',
    url: 'https://mywordpress.netslate.co.za/api/graphql',
    data: {
      query: query,
      variables: variables
    }
  }).then(res => {
    return res.data.data;
  })
};

export const getMenu = async (id) => {
  const query = `
    query menuItems($id: ID!, $idType: MenuNodeIdTypeEnum!) {
      menu(id: $id, idType: $idType) {
        menuItems {
          nodes {
            label
            connectedNode {
              node {
                id
                ... on Page {
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    id: id,
    idType: 'DATABASE_ID'
  }
  const data = await fetchData(query, variables);
  return data;
}

// get all posts
export const getPosts = async () => {
  const query = `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  const data = await fetchData(query);
  return data.posts.edges;
}


// Get single post using the slug as an id
export const getSinglePost = async (id) => {
  const query = `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `;
  const variables = {
    id: id,
    idType: 'SLUG'
  }

  const data = await fetchData(query, variables)
  return data.post;
}


export const getSinglePage = async (slug) => {
  const query = `
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        content
        title
        featuredImage {
          node {
            caption
            altText
            sourceUrl
          }
        }
      }
    }
  `;
  const variables = {
    id: slug,
    idType: 'URI'
  }

  const data = await fetchData(query, variables);
  return data.page;
}

// Get projects
// get all posts
export const getProjects = async () => {
  const query = `
    query AllProjects {
      projects {
        nodes {
          uri
          title
          content
          date
          slug
          projectImages {
            image1 {
              sourceUrl
              slug
              caption
              title
            }
          }
        }
      }
    }
  `
  const data = await fetchData(query);
  return data.projects.nodes;
}

// Get 4 latest projects for the front page
export const getLatestProjects = async () => {
  const query = `
    query AllProjects {
        projects(last: 4) {
          nodes {
            slug
            title
            projectDetails {
              subtitle
            }
            content
            projectImages {
              image1 {
                sourceUrl
              }
            }
          }
        }
    }
  `
  const data = await fetchData(query);
  return data.projects.nodes;
}

// Get single project using a slug
export const getSingleProject = async (slug) => {
  const query = `
    query ProjectBySlug($id: ID!, $idType: ProjectIdType!) {
      project(id: $id, idType: $idType) {
        title
        content
        date
        modified
        projectImages {
          image2 {
            sourceUrl
            caption
          }
          image3 {
            caption
            sourceUrl
          }
          image4 {
            sourceUrl
            caption
          }
          image1 {
            caption
            sourceUrl
          }
        }
      }
    }
  `;
  const variables = {
    id: slug,
    idType: 'SLUG'
  }

  const data = await fetchData(query, variables);
  return data.project;
}


// get all testimonials
export const getTestimonials = async () => {
  const query = `
    query AllPosts {
      testimonials {
        nodes {
          content
          testimonialDetails {
            name
            occupation
            organisation
            image {
              sourceUrl
            }
          }
        }
      }
    }
    `
  const data = await fetchData(query);
  return data.testimonials.nodes;
}