import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/grid.css"

export default props => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <div className="main" style={{ width: `100%` }}>
        <div class="sidebar">
          <div>
            <span>Bienvenido</span>
            <h1>
              Soy{" "}
              <span
                className="stroke"
                style={{ fontSize: `1.05em`, margin: 0 }}
              >
                Abdel Mejia
              </span>
            </h1>
            <p style={{ fontSize: `0.75em` }}>
              En esta página web encontrarás temas de tecnología, desarrollo de
              videojuegos y mucho más. Así mismo te mostraré los proyectos que
              he realizado. Esto me apasiona y quiero{" "}
              <strong>compartirlo</strong> contigo.
            </p>
            <Link to="/bhalut/">
              <button className="button -regular center">Sobre mí</button>
            </Link>
            <Link to="/ayuda/">
              <button className="button -dark center">Consejos</button>
            </Link>
          </div>
        </div>
        <div class="content">
          <Img
            style={{ opacity: `0.8` }}
            fixed={props.data.file.childImageSharp.fixed}
            alt="Bhalut logo"
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "bhalut-background.png" }) {
      childImageSharp {
        fixed(width: 446, height: 492) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
