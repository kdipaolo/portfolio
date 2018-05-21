import React, { Fragment } from 'react'
import styled from 'styled-components'
import profile from '../images/profile.jpg'
import Social from './Social'
import { ArrowLeft } from 'react-feather'
import Link from 'gatsby-link'
const mq = properties =>
  `@media (max-width: 830px) {
    ${properties}
  }`

const ProfileImg = styled.img`
  width: 200px;
  clip-path: circle(100px at center);
  ${mq(`order: 1`)};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #e9e4f0, #d3cce3);
    position: absolute;
    bottom: 0;
  }
  ${mq(`
    grid-template-columns: 1fr;
    justify-items: center;
  `)};
`

const Heading = styled.h1`
  font-size: 23px;
  max-width: 700px;
  text-align: left;
  line-height: 45px;
  color: #706d77;
  ${mq(`order: 2`)};
`

const Emphasis = styled.span`
  background: red;
  padding: 1%;
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const SLink = styled.a`
  border-bottom: 1px dashed #333;
  color: #333;
  font-weight: 500;
`
const Arrow = styled(ArrowLeft)`
  position: absolute;
  left: 2.5%;
  top: 2%;
  color: #84799a;
  transform: scale(1.1);
  transition: 0.1s all ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.4);
  }
`

export default ({ location: l }) => {
  const ifHome = l.pathname === '/'
  return (
    <span>
      {!ifHome && (
        <Link to="/">
          <Arrow />
        </Link>
      )}
      <Wrapper>
        <Heading>
          <Emphasis>Kurt DiPaolo</Emphasis> is a front-end developer. He
          currently works for a dev shop called{' '}
          <SLink href="https://www.streamlinedstudio.com/" target="_blank">
            Streamlined Studio
          </SLink>{' '}
          helping build rich web applications.
          <Social />
        </Heading>
        <ProfileImg src={profile} alt="A Picture of Kurt DiPaolo" />
      </Wrapper>
    </span>
  )
}
