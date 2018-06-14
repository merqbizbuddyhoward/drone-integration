import React from 'react'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import './styles.scss'

export default () => {
  return (
    <div className="AboutPage">
      <Heading className="AboutPage_heading" tag="h1">
        About Us
      </Heading>
      <Heading className="AboutPage_subheading" tag="h2">
        Our mission
      </Heading>
      <Paragraph className="AboutPage_text">
        We aim to create a trusted place where two worlds coexist. We connect
        buyers and sellers together in a transparent marketplace where exchanges
        are seamless and quality is guarantee.
      </Paragraph>
      <Heading className="AboutPage_subheading" tag="h2">
        Our promise, on paper
      </Heading>
      <Paragraph className="AboutPage_text">
        We bring the recovered paper industry the best of modern technology
        without sacrificing that crucial human touch. With our innovative
        marketplace platform, our network of quality engineers, and our customer
        support team, we promise to deliver the best experience for buyers and
        sellers possible.
      </Paragraph>
      <Paragraph className="AboutPage_text">
        Trust, transparency, and efficiency are the pillars upon which we are
        built and we would not have it any other way.
      </Paragraph>
      <Heading className="AboutPage_subheading" tag="h2">
        Our team
      </Heading>
      <Paragraph className="AboutPage_text">
        We are a team of digital innovators and recovered paper experts who are
        passionate about improving the industry and how business is done
        globally. Collectively, we bring decades of experience in digital
        marketplace platforms, wastepaper trading, and papermaking.
      </Paragraph>
    </div>
  )
}
