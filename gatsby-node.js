exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const USER_PAGE_REGEX = /^\/(login|join|forgot-password)/
  return new Promise((resolve, reject) => {
    if (page.path.match(USER_PAGE_REGEX)) {
      page.layout = 'single'
      createPage(page)
    }

    resolve()
  })
}
