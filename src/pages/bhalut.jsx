import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { rhythm } from "../utils/typography"
import { TwitterFollowButton } from "react-twitter-embed"

export default props => {
  return (
    <Layout>
      <SEO title="Bhalut" />
      <div
        style={{
          display: `grid`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        className="center-profile"
      >
        <h1>Un poco sobre mí</h1>
        <TwitterFollowButton screenName={"soybhalut"} />
        <div className="profile">
          <article>
            <Img
              fixed={props.data.file.childImageSharp.fixed}
              alt="Abdel Mejia"
              id="pic"
              className="pic"
            />
            <p>Ahoy!</p>
            <p>Bienvenido a mi morada.</p>
            <p>Es hora de aburrirse un poco hablando de mí.</p>
            <br />
            <p>
              No es que te odie, pero hay convenciones, una de ellas es colocar
              un "Acerca de" en tu sitio web, para aprender sobre el personaje
              que lo creó.
            </p>
            <p>
              Encantado de conocerte, mi nombre es Abdel Mejía (no pondré mi
              nombre completo. Y no, no soy árabe, soy colombiano nacido en La
              Guajira con un nombre hebreo).
            </p>
            <p>
              También me gusta la tecnología, los videojuegos o los juegos de
              mesa, disfruto ser curioso (significa que todo es un pretexto para
              investigar). Crear me impulsa, por eso estoy en este mundo
              tecnológico, también los problemas del emprendimiento. Me gusta
              cocinar (lo hago principalmente por mí, pero siempre me han dicho
              que se ve bien, todavía no lo creo).
            </p>
            <p>
              Asisto a diferentes comunidades de tecnología, me gustaría ser un
              ingeniero de software que sepa lo que es necesario desde la base,
              me gustaría crear, contribuir, dar soluciones, colaborar...
            </p>
            <p>Y sí, este personaje soy yo, ya no te aburro.</p>
            <p>buena suerte.</p>
            <p>nos vemos.</p>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
