import React from "react"
import {Link} from 'gatsby';
import { Image } from "cloudinary-react"

export default ({ post }) => (
  <article className="bt bb b--black-10">
    <Link
      className="db pv4 ph3 ph0-l no-underline black dim"
      to={`/posts/${post.slug}`}
    >
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <Image publicId="boilers" />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 avenir mt0 lh-title">{post.title}</h1>
          <p className="f6 avenir f5-l lh-copy">{post.excerpt}</p>
          <p className="f6 lh-copy mv0">By {post.author}</p>
        </div>
      </div>
    </Link>
  </article>
)
