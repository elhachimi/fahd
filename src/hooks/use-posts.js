import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              author
            }
            excerpt
          }
        }
      }
    }
  `)
  return data.allMdx.edges.map(({node})=> ({
    ...node.frontmatter,
    excerpt: node.excerpt
  }))
}

export default usePosts;
