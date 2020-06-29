import React, { Fragment } from "react"
import Nav from "./Nav"

export default props => {
  return (
    <Fragment>
      <div style={{ margin: `2rem auto`, maxWidth: 850, padding: `0 0.5rem` }}>
        <Nav />
      </div>
      <div>
        <main>{props.children}</main>
      </div>
    </Fragment>
  )
}
