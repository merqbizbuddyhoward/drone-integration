import React from 'react'
import { Link, withPrefix } from 'gatsby-link'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import CategoryTile from '../components/CategoryTile'
import { Gallery, GalleryItem } from '../components/Gallery'
import LandingSection from '../components/LandingSection'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="IndexPage">
      <LandingSection isAlternative={true}>
        <Title el="h3">We make buying & selling recovered paper easy.</Title>
        <p>Get Started</p>
        <ButtonGroup>
          <Button>Buy</Button>
          <Button>Sell</Button>
        </ButtonGroup>
      </LandingSection>
      <LandingSection>
        <Title el="h3">Our Solutions</Title>
        <Gallery>
          <GalleryItem>
            <CategoryTile
              defaultText="New Buyers & Sellers"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/1-transfer.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Domestic & Export Opportunities"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/2-worldwide.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Integrated Logistics + Guaranteed Pickup"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/3-pointclick.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Find & Contract Large Volumes"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/4-binary.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Live Real-Time Pricing"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/5-smartwatch.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Guaranteed Payment"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/6-settings.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Dedicated Customer Support"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/7-arglasses.png'
              )}
            />
          </GalleryItem>
          <GalleryItem>
            <CategoryTile
              defaultText="Invoice + Document Management"
              defaultImageSrc={withPrefix(
                '/assets/images/solutions-icons/8-cloudcomputing.png'
              )}
            />
          </GalleryItem>
        </Gallery>
      </LandingSection>
      <LandingSection isAlternative={true}>
        <Title el="h3">How We Work</Title>
        {/* Implement video player component */}
      </LandingSection>
      <LandingSection isAlternative={true}>
        <Title el="h3">See How Easy It Is</Title>
        {/* Implement Buy/Sell graphic? */}
      </LandingSection>
      <LandingSection isAlternative={true}>
        <Title el="h3">Our Experts and Sales Professionals Work for You</Title>
        {/* Implement content switcher component, with category tiles */}
      </LandingSection>
      <LandingSection isAlternative={true}>
        <Title el="h3">What Our Users are Saying</Title>
        {/* Implement slideshow component, with quote */}
      </LandingSection>
      <LandingSection>
        <Title el="h3">Our Team</Title>
        {/* Implement bio component for each person */}
      </LandingSection>
    </div>
  )
}

export default IndexPage
