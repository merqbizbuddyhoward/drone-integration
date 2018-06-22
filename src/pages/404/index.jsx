import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

import './styles.scss'

export default () => (
  <div className="Error404Page">
    <Box pad="large" align="center">
      <Heading className="Error404Page_heading" align="center" strong>
        Sorry! We can not find this page
      </Heading>
      <hr className="Error404Page__divider" />
      <Paragraph align="center">
        This page either doesn't exist, or it moved somewhere else. If you think
        this is an error or you need assistance, please contact{' '}
        <Anchor className="Error404Page_link" href="mailto:support@merqbiz.com">
          support@merQbiz.com
        </Anchor>
      </Paragraph>
      <Footer direction="column">
        <Button
          className="Error404Page__button"
          label="Go to homepage"
          primary
          href="/"
        />
      </Footer>
    </Box>
  </div>
)
