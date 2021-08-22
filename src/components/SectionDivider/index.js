import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDividerTitle = styled.h4`
  font-size: 1.2rem;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-weight: 700;
`
const StyledDividerSubTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-weight: 700;
`

const StyledDivider = styled.section`
  background-color: red;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 10vh;
`
const SectionDivider = ({ title, subTitle }) => {
    return (
        <StyledDivider>
            <StyledDividerSubTitle>{title}</StyledDividerSubTitle>
            <StyledDividerTitle>{subTitle}</StyledDividerTitle>
        </StyledDivider>
    )
}

SectionDivider.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
export default SectionDivider
