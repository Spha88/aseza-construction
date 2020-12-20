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
        nodes {
          date
          title
          slug
          author {
            node {
              firstName
              lastName
            }
          }
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    `
  const data = await fetchData(query);
  return data.posts.nodes;
}

// Get latest posts
export const getLatestPosts = async () => {
  const query = `
    query AllPosts {
      posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          date
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
        }
      }
    }
  `
  const data = await fetchData(query);
  return data.posts.nodes;
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
          projectDetails {
            subtitle
          }
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

// Get 4 latest projects for the front page
export const getLatestProjectsForWidget = async () => {
  const query = `
    query AllProjects {
      projects(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          title
          slug
          projectImages {
            image1 {
              sourceUrl(size: THUMBNAIL)
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
        projectDetails {
          architecture
          company
          dateCompleted
          dateStarted
          employees
          fieldGroupName
          location
          subtitle
          surfaceArea
        }
        projectImages {
          image1 {
            caption
            sourceUrl
          }
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
          image5 {
            sourceUrl
            caption
          }
          image6 {
            sourceUrl
            caption
          }
          image7 {
            sourceUrl
            caption
          }
          image8 {
            sourceUrl
            caption
          }
          image9 {
            sourceUrl
            caption
          }
          image10 {
            sourceUrl
            caption
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

// Get 4 latest projects for the front page
export const getEmployees = async () => {
  const query = `
      query GetEmployees {
        employees(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            employeeDetails {
              firstName
              lastName
              position
              image {
                sourceUrl(size: LARGE)
              }
              facebook
              linkedin
              twitter
            }
            slug
          }
        }
      }
  `
  const data = await fetchData(query);
  return data.employees.nodes;
}

// Get 6 Services
export const getServices = async () => {
  const query = `
      query GetServices {
        services(last: 6) {
          nodes {
            slug
            title
            serviceImages {
              image1 {
                sourceUrl
              }
            }
            content(format: RENDERED)
          }
        }
      }
  `
  const data = await fetchData(query);
  return data.services.nodes;
}

// Get featured services for the front page
export const getFeaturedServices = async () => {
  const query = `
  query GetFeaturedServices {
    services(first: 3, where: {categoryName: "featured-services"}) {
      nodes {
        title
        content
        slug
        serviceImages {
          image1 {
            altText
            sourceUrl
            fileSize(size: MEDIUM)
          }
        }
      }
    }
  }
  `
  const data = await fetchData(query);
  return data.services.nodes;
}

export const getSingleServicePageData = async (slug) => {
  const query = `
  query GetSingleServicePageData($id: ID!, $idType: ServiceIdType!) {
    service(id: $id, idType: $idType) {
      id
      content
      date
      serviceImages {
        image1 {
          sourceUrl
          altText
          caption
        }
        image2 {
          sourceUrl
          altText
          caption
        }
        image3 {
          sourceUrl
          altText
          caption
        }
        image4 {
          sourceUrl
          altText
          caption
        }
        image5 {
          sourceUrl
          altText
          caption
        }
        image6 {
          sourceUrl
          altText
          caption
        }
        image7 {
          sourceUrl
          altText
          caption
        }
        image8 {
          sourceUrl
          altText
          caption
        }
        image9 {
          sourceUrl
          altText
          caption
        }
        image10 {
          sourceUrl
          altText
          caption
        }
      }
      title
    }
    services {
      nodes {
        slug
        title
      }
    }
  }
  `
  const variables = {
    id: slug,
    idType: 'SLUG'
  }

  const data = await fetchData(query, variables);
  return data;
}

