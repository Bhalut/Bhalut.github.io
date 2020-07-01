import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Maintenance from "../components/Maintenance"

export default () => {
  return (
    <Layout>
      <SEO title="Ayuda" />
      <Maintenance />
      <h1>Vida extra</h1>
    </Layout>
  )
}
