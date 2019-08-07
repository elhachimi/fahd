import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <article className="athelas">
      <div
        className="vh-100 dt w-100 tc bg-dark-gray white cover"
        style={{
          background:
            "url(https://res.cloudinary.com/dvgmggxmh/image/upload/v1553344491/work.jpg) no-repeat center",
        }}
      >
        <div className="dtc v-mid">
          <header className="white-70 mb2"></header>
          <h1 className="f1 f-headline-l fw1 i white-60 baskerville">
            Craftsmanship
          </h1>
          <blockquote className="ph0 mh0 measure f4 lh-copy center">
            <p className="fw1 white-70">
              Doing it right when no one seems watching
            </p>
          </blockquote>
        </div>
      </div>
    </article>
    <section className="pa4 avenir">
      <h2 className="avenir fw3 black-80 ph3 ph0-l">Videos</h2>
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3  black-80 fw4 mt0 lh-title">
              From a fishing village to a world class surfing destination
            </h1>
            <p className="f5 f5-l lh-copy black-70">
              The area of Taghazout is becoming a world class surfing
              destination and we were honored to be reported by the CNN for
              playing a key role in it
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns">
            <iframe
              width="550"
              height="360"
              src="//fave.api.cnn.io/v1/fav/?video=tv/2017/10/10/taghazout-inside-the-middle-east-morocco-surfing.cnn&customer=cnn&edition=international&env=prod"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="f6 lh-copy gray mv0">
          By <span className="ttu">the CNN</span>
        </p>
        <time className="f6 db gray">Oct. 10, 2017</time>
      </article>
      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3  black-80 fw4 mt0 lh-title">
              Shape class around a cup of mint tea
            </h1>
            <p className="f5 f5-l black-80 lh-copy ">
              OuiSurf from Montreal paid a visit to Fahds shop to have a cup of
              tea and ask questions about how custom boards are made, you are
              wellcome to do the same :)
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns">
            <iframe
              src="https://player.vimeo.com/video/113229096"
              width="550"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="f6 lh-copy gray mv0">
          By <span className="ttu">OuiSurf</span>
        </p>
        <time className="f6 db gray">Nov. 1, 2015</time>
      </article>
      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3  black-80 fw4 mt0 lh-title">
              A day in the office
            </h1>
            <p className="f5 f5-l black-80 lh-copy ">
              Our brother Marouan is starting a career as a surf videographer,
              thanks for stopping by and recording a normal work day.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns">
            <iframe
              width="550"
              height="360"
              src="https://www.youtube.com/embed/NwxMFhtkuw4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="f6 lh-copy gray mv0">
          By <span className="ttu">Marouan Chadox</span>
        </p>
        <time className="f6 db gray">Jun. 24, 2019</time>
      </article>
    </section>
  </Layout>
)
