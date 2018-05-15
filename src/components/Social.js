import React from 'react'
import { Github, Twitter, Linkedin, FileText } from 'react-feather'
import styled from 'styled-components'

const mq = properties =>
  `@media (max-width: 830px) {
    ${properties}
  }`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 200px;
  justify-items: center;
  margin-top: 5px;
  ${mq(`
  margin-left: auto;
  margin-right: auto;
  `)} & > a > svg {
    width: 23px;

    color: #787482;
  }
`
const Link = styled.a`
  transition: 0.2s all ease;

  &:hover {
    transform: scale(1.25);
  }
`

export default () => {
  return (
    <Wrapper>
      <Link target="_blank" href="https://github.com/kdipaolo">
        <Github />
      </Link>
      <Link target="_blank" href="https://twitter.com/KurtDipaolo">
        <Twitter />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/kurtdipaolo/">
        <Linkedin />
      </Link>
      <Link target="_blank" href="/portfolio/dipaolo_resume.pdf">
        <FileText />
      </Link>
    </Wrapper>
  )
}
