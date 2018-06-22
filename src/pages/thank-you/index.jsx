import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Link from 'gatsby-link'

import './styles.scss'

export default () => (
  <Box
    className="ThankYou"
    justify="center"
    align="center"
    flex={false}
    pad="medium"
    size="large"
  >
    <Heading
      className="ThankYou__title"
      tag="h3"
      align="center"
      margin="medium"
      strong
    >
      Thank you for registering with us.
    </Heading>
    <hr className="ThankYou__divider" />
    <Paragraph>
      The verification can take up to three business days to complete. We will
      send you a confirmation email when your information is verified.
    </Paragraph>
    <Link to="/">Back to merQbiz.com</Link>
  </Box>
)
