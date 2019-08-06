import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ()=>(
  <Layout>
    <div class="f3 avenir black-70 tc pv6">
      <h2>Thank you for contacting us!</h2>
      <p>We will get back to you soon</p>
      <p><Link to="/">Back</Link></p>
    </div>
  </Layout>
)
