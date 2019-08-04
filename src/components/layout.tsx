/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {ReactNode} from "react"

import "./layout.css"
import Header from "./header"
import Footer from "./footer"

interface Props {
  children:  ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header/>
    <main>{children}</main>
    <Footer />
  </>
)


export default Layout
