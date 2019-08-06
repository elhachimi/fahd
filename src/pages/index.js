import React from "react"
import {
  Video,
  Image,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react"

//import usePosts from "../hooks/use-posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

const IndexPage = () => {
  //const posts = usePosts()
  const posts = []
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `surfboards`,
          `surf`,
          `shape`,
          `taghazout`,
          `tamraght`,
          `handmade`,
          `surfshop`,
          `shop`,
        ]}
      />

      <article className="pb4">
        <CloudinaryContext cloudName="dvgmggxmh">
          <Video
            publicId="the_shop"
            width="100%"
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop
          />
        </CloudinaryContext>
      </article>
      <article data-name="article-full-bleed-background">
        <div
          className="cf"
          style={{
            background:
              "url(https://res.cloudinary.com/dvgmggxmh/image/upload/v1553344491/work.jpg) no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 avenir">
            <header className="bb b--black-70 pv4-l pv2">
              <h3 className="f2-l f3 fw7 ttu tracked lh-title mt0 mb3 avenir">
                The Factory
              </h3>
              <h4 className="f4 f3-l fw4 i lh-title mt0">Tamraght, Agadir</h4>
            </header>
            <section className="pt5-l pb4-l pt3 pb2">
              <p className="avenir lh-copy measure f4-l f5 mt0">
                Fahds Factory is a special place located in Tamraght 14 km north
                from Agadir, a place where customers can watch their boards in
                the making, a place where it’s possible to touch and feel
                different kind of boards watch the shaper in the craft and chat
                to experience the old school surf shops.
                <br />
                We want every visitor to be at his ease and not feel pressed to
                buy we are not a clothing store ; )
                <br />
                We are only specialized in gears and accessories to be in the
                water
              </p>
            </section>
          </div>
        </div>
      </article>
      <CloudinaryContext cloudName="dvgmggxmh">
        <article className="avenir black-80">
          <h2 className="tc f4 fw4 pv4-l pv2 tracked">Surfboards</h2>
          <div className="flex">
            <div className="w-25-l w-50 pa2">
              <Image publicId="flower" />
            </div>
            <div className="w-25-l w-50 pa2">
              <Image publicId="africana" />
            </div>
            <div className="w-25-l w-50 dn-m db pa2">
              <Image publicId="long" />
            </div>
            <div className="w-25-l w-50 dn-m pa2">
              <Image publicId="africana2" />
            </div>
            <div className="w-25-l w-50 dn-m pa2">
              <Image publicId="UNADJUSTEDNONRAW_thumb_7d8" />
            </div>
          </div>
        </article>
        <article className="avenir black-80">
          <h2 className="tc f4 fw4 pv4 tracked">Latest post</h2>
        </article>
        <section className="mw7 center avenir">
          <h2 className="avenir fw1 ph3 ph0-l">Blog</h2>
          {posts.map(post => (
            <PostPreview post={post} />
          ))}
        </section>
      </CloudinaryContext>
    </Layout>
  )
}

export default IndexPage
