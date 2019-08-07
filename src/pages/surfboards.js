import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/Card"

export default () => (
  <Layout>
    <div className="f3 avenir black-70 cf pa4">
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="long" name="Long Board"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="long-0" name="Long Board"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="long-1" name="Long Board"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="fish-0" name="Black memba"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="black-memba" name="Black memba"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="fish-1" name="Yellow fish"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="germany" name="Stooned"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="africana" name="Africana"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="truster-1" name="Africana"/>
      </div>
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Card image="short-fish" name="Africana"/>
      </div>
    </div>
  </Layout>
)
