const path = require('path')

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode, createNodeField } = boundActionCreators
  if (node.internal.owner === 'gatsby-transformer-json') {
    let type = node.internal.type
    let name = type.substring(0, type.length - 4)
    node.collection = name
    createNodeField({
      node,
      name: `collection`,
      value: name
    })
  }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const USER_PAGE_REGEX = /^\/(login|join|forgot-password|thank-you|update-password)/
  const INFORMATION_PAGE_REGEX = /^\/(faq)/
  return new Promise((resolve, reject) => {
    if (page.path.match(USER_PAGE_REGEX)) {
      page.layout = 'single'
      createPage(page)
    }
    if (page.path.match(INFORMATION_PAGE_REGEX)) {
      page.layout = 'information'
      createPage(page)
    }

    resolve()
  })
}
