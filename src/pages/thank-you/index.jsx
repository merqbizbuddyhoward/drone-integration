import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Link from 'gatsby-link'

export default () => (
  <Box
    className="ThankYou"
    justify="center"
    align="center"
    flex={false}
    pad="medium"
  >
    <Heading className="ThankYou__title" align="center" margin="medium">
      Thank you for registering with us.
    </Heading>
    {/* <Paragraph>Thank you text will go here</Paragraph> */}
    <Link to="/">Back to merQbiz.com</Link>
  </Box>
)
