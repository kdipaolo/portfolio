import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 5%;
`
const Header = styled.h1`
  color: #4e4e4e;
`
const Content = styled.div`
  color: darkgray;
  font-size: 21px;
  line-height: 38px;
  margin-top: 5%;
  & p,
  li {
    color: #828282;
  }
  & h2 {
    color: #4e4e4e;
  }
`

export const Learning = ({
  data: { markdownRemark: { frontmatter: { title, tags }, html } },
}) => {
  const createMarkup = () => {
    return { __html: html }
  }

  const Tags = () => <div>{tags.map(tag => <span>{tag}</span>)}</div>

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Tags />
      <Content dangerouslySetInnerHTML={createMarkup()} />
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query learningBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`

export default Learning
