import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import styled from 'styled-components'
import Header from '../components/Header'

const Wrapper = styled.div`
  max-width: 1200px;
  background: #fff;
  padding: 7% 3% 3% 3%;
  box-sizing: border-box;
  margin: 5% auto;
  border-radius: 2px;
  position: relative;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`
const Inner = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: left;
`
const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Wrapper>
      <Inner>
        <Header location={location} />
        {children()}
      </Inner>
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
