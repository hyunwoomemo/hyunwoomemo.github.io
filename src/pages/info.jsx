import React from 'react'
import { graphql, Link } from 'gatsby'
import Text from 'components/Text'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1>{description}</Text1>
      {author}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
