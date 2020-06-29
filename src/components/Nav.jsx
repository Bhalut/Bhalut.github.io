import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `2rem`,
      margin: `10px 0`,
    }}
    className="nav-button"
  >
    <Link
      style={{
        margin: `10px 35px`,
        textAlign: `center`,
        textDecoration: `none`,
        color: `#8C8C8B`,
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

export default props => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Inicio</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/bhalut/">Bhalut</ListLink>
        <ListLink to="/portafolio/">Portafolio</ListLink>
      </ul>
    </header>
  )
}
