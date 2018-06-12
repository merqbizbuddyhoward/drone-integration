import React from 'react'

const Faq = ({ question, answer }) => {
  return (
    <div className="FaqPage__faq">
      <p className="FaqPage__question">{question}</p>
      <p className="FaqPage__answer">{answer}</p>
    </div>
  )
}

const FaqEntries = ({ entries }) => {
  const faqEntries = entries.map((entry, index) => {
    return <Faq key={index} question={entry.question} answer={entry.answer} />
  })
  return <div className="FaqPage__entries">{faqEntries}</div>
}

const FaqSections = ({ sections }) => {
  let faqSections = sections.map((category, index) => {
    return (
      <div key={index} className="FaqPage__section">
        <h3 className="FaqPage_title">{category.name}</h3>
        <FaqEntries entries={category.entries} />
      </div>
    )
  })

  return <div className="FaqPage__sections">{faqSections}</div>
}

export default ({ data }) => {
  const { categories } = data.faqJson
  return (
    <div className="FaqPage">
      <h1>Frequently Asked Questions</h1>
      <FaqSections sections={categories} />
    </div>
  )
}

export const FaqQuery = graphql`
  query FaqQuery {
    faqJson(collection: { eq: "Faq" }) {
      categories {
        name
        entries {
          question
          answer
        }
      }
    }
  }
`
