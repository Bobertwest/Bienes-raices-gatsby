import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Navegacion from "./navegacion"
import { css } from "@emotion/react"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 130rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to="/">
          <img src={logo.publicURL} alt="logo de Bienes Raices" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
