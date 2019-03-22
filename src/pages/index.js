import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article className="bg-light-gray ">
      <div className="aspect-ratio aspect-ratio--16x9 mb4">
        <div
          className="aspect-ratio--object cover"
          style={{background:"url(http://mrmrs.github.io/photos/001.jpg) center;"}}
        />
      </div>
    </article>
  </Layout>
)

export default IndexPage
