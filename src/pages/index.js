import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  margin: 4% 0;
`
const Header = styled.h4`
  text-transform: uppercase;
  color: darkgray;
  margin: 0;
`
const Content = styled.p`
  color: #333;
  margin: 0;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li`
  margin: 10px 0;
  color: #333;
  &:first-of-type {
    margin-top: 0;
  }
`
const LinkItem = styled(Link)`
  margin: 10px 0;
  color: #333;
  text-decoration: none;
`

const Tags = styled.span`
  display: block;
  font-size: 13px;
  color: #989898;
  margin: 5px 0;
`

const IndexPage = ({ data }) => (
  <Wrapper>
    <Header>About</Header>
    <Content>
      Self-disciplined developer, with a design eye, who cares deeply about the
      quality of his work, passionate about learning new technologies, and
      focused on the end goal.
    </Content>
    <Header>Projects</Header>

    <List>
      {data.allMarkdownRemark.edges.map(project => {
        const { title, tags, slug } = project.node.frontmatter

        return (
          <LinkItem to={`/projects/${slug}`}>
            {title}
            <Tags>{tags.join(' ● ')}</Tags>
          </LinkItem>
        )
      })}
    </List>

    <Header>Skills</Header>

    <List>
      <ListItem>JavaScript</ListItem>
      <ListItem> React.js</ListItem>
      <ListItem> ES2015+</ListItem>
      <ListItem> GraphQL</ListItem>
      <ListItem> RESTful API Design</ListItem>
      <ListItem> Node.js</ListItem>
      <ListItem> CSS3</ListItem>
      <ListItem> HTML5</ListItem>
      <ListItem> Agile Workflow</ListItem>
      <ListItem> Git</ListItem>
      <ListItem> UI Design</ListItem>
      <ListItem> Adobe Creative Suite</ListItem>
    </List>
  </Wrapper>
)

export const pageQuery = graphql`
  query Test {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
