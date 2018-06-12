import React from 'react'
import Split from 'grommet/components/Split'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <Split flex="left" separator>
    <Article>
      <Section
        full
        colorIndex="brand"
        pad="large"
        justify="center"
        align="center"
      >
        <Heading tag="h1">Sorry! We can not find this page.</Heading>
        <Paragraph>
          This page either doesn't exist, or it moved somewhere else. If you
          think this is an error or you need assistance, please contact{' '}
          <a href="mailto:support@merqbiz.com">support@merQbiz.com</a>
        </Paragraph>
      </Section>
    </Article>
  </Split>
)
