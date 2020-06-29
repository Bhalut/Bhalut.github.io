import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Maintenance from "../components/Maintenance"

export default () => {
  return (
    <Layout>
      <SEO title="Bhalut" />
      <Maintenance />
      <h1>Un poco sobre mí</h1>
    </Layout>
  )
}
