import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-link'

const Wrapper = styled.div`
  margin-top: 5%;
`

const Main = styled.img`
  width: 100%;
  border-radius: 2px;
`
const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  & > img {
    width: 100%;
    border-radius: 2px;
    box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  }
`

const Button = styled.a`
  background: #fff;
  padding: 2% 5%;
  border: 1px solid #efedf3;
  margin: 10% auto;
  display: inline-block;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  text-transform: uppercase;
  font-size: 14px;
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

const ButtonWrapper = styled.div`
  text-align: center;
`

const Header = styled.h1`
  color: #4e4e4e;
`

export default class Project extends Component {
  render() {
    console.log(this.props.data)
    const {
      title,
      main,
      slug,
      link,
      images,
    } = this.props.data.markdownRemark.frontmatter

    const createMarkup = () => {
      return { __html: this.props.data.markdownRemark.html }
    }

    return (
      <Wrapper>
        <Main src={`/portfolio/${slug}/${main}`} alt="" />

        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={createMarkup()} />

        <ButtonWrapper>
          {link ? (
            <Button href={link} target="_blank">
              View App
            </Button>
          ) : (
            'Internal Application / Private Repo'
          )}
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        main
        link
        images
      }
    }
  }
`
