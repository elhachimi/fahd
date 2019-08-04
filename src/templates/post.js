import React from "react"
import { graphql } from "gatsby"
import {MDXRenderer} from 'gatsby-mdx';
import Layout from "../components/layout"

//export const query =  graphql`
//query($slug:String!){
//  mdx(frontmatter:{slug:{eq: $slug}}){
//    frontmatter{
//      title
//    }
//    code {
//      body
//    }
//  }
//}
//`

//const PostTemplate = ({data: { mdx: post }}) => (
const PostTemplate = (post) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>posted by</p>
    <p>Body</p>
  </Layout>
)

export default PostTemplate
