import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Link from 'gatsby-link'
import './styles.scss'

export default () => (
  <Box className="FaqPage" justify="center" align="center" pad="medium">
    <Heading className="FaqPage_title" tag="h2" strong>
      General Information
    </Heading>

    <Heading className="FaqPage__question" tag="h3" margin="small" strong>
      Who can join merQbiz
    </Heading>
    <Paragraph margin="small" className="FaqPage__answer">
      We invite any paper mill, generator, recycler, or broker, to join merQbiz,
      the marketplace specifically designed to fulfill your procurement and
      sales needs in the paper industry. Click to
      <Link className="FaqPage_link" to="/join">
        Sign Up
      </Link>
    </Paragraph>

    <Heading className="FaqPage__question" tag="h3" margin="small" strong>
      Is my information secure on merQbiz?
    </Heading>
    <Paragraph margin="small" className="FaqPage__answer">
      Absolutely! merQbiz employs industry standard security processes and
      technologies to ensure your private and banking information are securely
      stored and transmitted.
    </Paragraph>

    <Heading className="FaqPage__question" tag="h3" margin="small" strong>
      Can I join as a buyer and a seller?
    </Heading>
    <Paragraph margin="small" className="FaqPage__answer">
      Yes, you can sign up as both a buyer and as a seller of recovered paper by
      following the simple registration steps. Remember: to ensure the integrity
      of our buyers and sellers, our industry experts will verify the
      information you provide before authenticating your account.
    </Paragraph>
    <Heading className="FaqPage__question" tag="h3" margin="small" strong>
      How does merQbiz make money?
    </Heading>
    <Paragraph margin="small" className="FaqPage__answer">
      merQbiz is currently free to use!
    </Paragraph>
  </Box>
)
