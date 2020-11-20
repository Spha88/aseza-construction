import axios from 'axios';

export const getMenu = id => {
  return axios({
    method: 'post',
    url: 'https://mywordpress.netslate.co.za/api/graphql',
    data: {
      query: `
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
        `,
      variables: {
        id: id,
        idType: 'DATABASE_ID'
      }
    }
  }).then(res => {
    // console.log(res.data.data.posts.edges);
    return res.data;
  })
}

// get all posts
export const getPosts = () => {
  return axios({
    method: 'post',
    url: 'https://mywordpress.netslate.co.za/api/graphql',
    data: {
      query: `
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
    }
  }).then(res => {
    // console.log(res.data.data.posts.edges);
    return res.data.data.posts.edges;
  })
}


// Get single post using the slug as an id
export const getSinglePost = id => {
  return axios({
    method: 'post',
    url: 'https://mywordpress.netslate.co.za/api/graphql',
    data: {
      query: `
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
                `
      ,
      variables: {
        id: id,
        idType: 'SLUG'
      }

    }
  }).then(res => {
    // console.log(res.data.data.post);
    return res.data.data.post;
  })
}


export const getSinglePage = slug => {
  return axios({
    method: 'post',
    url: 'https://mywordpress.netslate.co.za/api/graphql',
    data: {
      query: `
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
        `
      ,
      variables: {
        id: slug,
        idType: 'URI'
      }

    }
  }).then(res => {
    // console.log(res.data.data.post);
    return res.data.data.page;
  })
}