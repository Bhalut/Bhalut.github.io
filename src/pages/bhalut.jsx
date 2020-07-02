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
            <p>Es hora de que hablemos un rato y te cuente un poco sobre mí.</p>
            <br />
            <p>
              ¿Esto por qué? Bueno hay convenciones, una de ellas es colocar un
              "Acerca de" en tu sitio web, para aprender sobre el personaje que
              lo creó.
            </p>
            <p>
              Encantado de conocerte, mi nombre es Abdel Mejía. Soy un
              colombiano, nacido en La Guajira, con nombre hebreo.
            </p>
            <p>
              Me gusta la tecnología, los videojuegos y los juegos de mesa,
              disfruto ser curioso ya que considero que todo es un pretexto para
              investigar. Crear me impulsa, por eso estoy en este mundo
              tecnológico; también me interesan los temas de emprendimiento.
              Además cocino bien (o eso es lo que dicen quienes prueban mis
              platos).
            </p>
            <p>
              Participo en diferentes comunidades de tecnología, para mí es muy
              genial relacionarse con personas de la industria y poder hablar
              sobre temas muy diversos. Soy un desarrollador con ganas de seguir
              aprendiendo, conocer distintos temas por pasión a lo que hago,
              adquirir bases sólidas sobre diversos temas, mejorar mis
              habilidades blandas, contribuir a la comunidad y colaborar con la
              misma, aportar en las soluciones a diferentes problemas. En
              conclusión, fortalecer la comunidad es mi camino ninja.
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
