/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({node}) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
