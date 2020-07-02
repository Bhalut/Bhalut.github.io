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
            <p>Es hora de que hablemos un rato y te cuento un poco de mí.</p>
            <br />
            <p>
              Hay convenciones, una de ellas es colocar un "Acerca de" en tu
              sitio web, para aprender sobre el personaje que lo creó.
            </p>
            <p>
              Encantado de conocerte, mi nombre es Abdel Mejía. Y no, no soy
              árabe, soy colombiano que nació en La Guajira con un nombre
              hebreo.
            </p>
            <p>
              Me gusta la tecnología, los videojuegos o los juegos de mesa,
              disfruto ser curioso (todo es un pretexto para investigar). Crear
              me impulsa, por eso estoy en este mundo tecnológico, también me
              interesan los temas de emprendimiento. Cocino bien (o eso me
              dicen).
            </p>
            <p>
              Asisto a diferentes comunidades de tecnología, es muy genial
              relacionarse con las demás personas de la industria con temas muy
              diversos. Soy un desarrollador con ganas de seguir aprendiendo,
              conocer distintos temas por pasión a lo que hago, tener buenas
              bases, habilidades blandas, contribuir, dar soluciones,
              colaborar... Aportar a la comunidad, este es mi camino ninja.
            </p>
            <p>Y sí, este personaje soy yo.</p>
            <p>Buena suerte.</p>
            <p>Nos vemos.</p>
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
