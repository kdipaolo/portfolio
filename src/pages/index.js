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
    {/* <Header>About</Header>
    <Content>
      I currently live in Cincinnati, and i’ve been working remotely full-time
      for the past three years. I love working in the front-end with JavaScript,
      and my preferred framework to use is React JS. I also enjoy working in the
      back-end as well with technologies like Node JS and Express. I love
      learning new things, whether that be through binge-watching front-end
      masters courses or thinking up an app idea and seeing if I can make it
      come to life. Lately, i’ve been enjoying working with GraphQL on the
      server and the client side!
    </Content> */}
    <Header>Projects</Header>

    <List>
      {data &&
        data.allMarkdownRemark.edges
          .sort((a, b) => {
            return a.node.frontmatter.order > b.node.frontmatter.order
          })
          .map(project => {
            const { title, tags, slug, order } = project.node.frontmatter

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
      <ListItem> JavaScript</ListItem>
      <ListItem> React.js</ListItem>
      <ListItem> Redux</ListItem>
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
            order
          }
        }
      }
    }
  }
`

export default IndexPage
