import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <Box className="AboutPage" justify="center" align="center" pad="medium">
    <Heading strong margin="small">
      About Us
    </Heading>
    <Heading strong tag="h3" margin="small">
      Our mission
    </Heading>
    <Paragraph margin="small">
      We aim to create a trusted place where two worlds coexist. We connect
      buyers and sellers together in a transparent marketplace where exchanges
      are seamless and quality is guarantee.
    </Paragraph>
    <Heading strong tag="h3" margin="small">
      Our promise, on paper
    </Heading>
    <Paragraph margin="small">
      We bring the recovered paper industry the best of modern technology
      without sacrificing that crucial human touch. With our innovative
      marketplace platform, our network of quality engineers, and our customer
      support team, we promise to deliver the best experience for buyers and
      sellers possible.
    </Paragraph>
    <Paragraph margin="small">
      Trust, transparency, and efficiency are the pillars upon which we are
      built and we would not have it any other way.
    </Paragraph>
    <Heading strong tag="h3" margin="small">
      Our team
    </Heading>
    <Paragraph margin="small">
      We are a team of digital innovators and recovered paper experts who are
      passionate about improving the industry and how business is done globally.
      Collectively, we bring decades of experience in digital marketplace
      platforms, wastepaper trading, and papermaking.
    </Paragraph>
  </Box>
)
