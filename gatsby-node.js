const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
var fs = require('fs-extra')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const resumePath = path.resolve(__dirname, `./src/dipaolo_resume.pdf`)
  const prodResumePath = path.resolve(__dirname, `./public/dipaolo_resume.pdf`)
  fs.copySync(resumePath, prodResumePath)

  const projectTemplate = path.resolve(`src/templates/project.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              main
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/projects/${node.frontmatter.slug}`,
        component: projectTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })

      const devImagePath = path.resolve(
        __dirname,
        `./src/images/${node.frontmatter.slug}/main.png`
      )
      const prodLocation = path.resolve(
        __dirname,
        `./public/projects/${node.frontmatter.slug}/images/main.png`
      )
      fs.copySync(devImagePath, prodLocation)
    })
  })
}
