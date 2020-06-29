import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/blog.css"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="section">
        <h1 style={{ marginBottom: `3.5rem`, display: `inline-block` }}>
          Blog de Bhalut
        </h1>
        <div className="grid">
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="item item--medium" key={i}>
                <article key={node.fields.slug}>
                  <div className="item__details">
                    <header>
                      <h3 style={{ marginBottom: rhythm(1 / 5) }}>
                        <Link
                          style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `#403f3c`,
                          }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
