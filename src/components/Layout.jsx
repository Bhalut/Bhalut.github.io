import React, { Fragment } from "react"
import Nav from "./Nav"
import "../styles/grid.css"

export default props => {
  return (
    <Fragment>
      <div
        style={{ margin: `2rem auto`, maxWidth: 850, padding: `0 0.5rem` }}
        className="header"
      >
        <Nav />
      </div>
      <div>
        <main>{props.children}</main>
      </div>
    </Fragment>
  )
}
