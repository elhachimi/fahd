import React from "react"
import { Instagram } from "./generic/icons"

const Footer = () => (
  <footer className="pa4-m pa2 mid-gray avenir">
    <section className="cf mb5-ns">
      <div className="mb4-ns mb0-ns w-50 w-50-l fl">
        <article className="dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <h4 className="f5 f4-l fw6">Tamraght</h4>
          <span className="f7 f6-l db black-70">Agadir, Morocco</span>
          <a
            className="f6 db fw6 pv3 black-70 link dim"
            title="Call Fahd Surfboards"
            href="tel:+212601517008"
          >
            +212 601-517008
          </a>
          <small className="f6 db-ns tc-m dn">
            © {new Date().getFullYear()} Fahd Handmade Surfbaords. All Rights
            Reserved
          </small>
        </article>
      </div>
      <div className="mb4-ns mb0-ns fl w-50 w-50-l pl4-m">
        <div className="mv3">
          <a
            className="black-70 f4 f3-ns fw6 tl link dim dib"
            href="mailto:hello@fahd.surf"
          >
            hello@fahd.surf
          </a>
        </div>
        <div className="mv4-m">
          <p className="f4 mb3-ns f6 mt0">Folow us on social media</p>
          <a
            className="link hover-silver near-black dib tc"
            href="https://instagram.com/fahdsurfboards"
            title="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </section>
    <div className="dn-m">
      <p className="tc">
        © {new Date().getFullYear()} Fahd Handmade Surfbaords. All Rights
        Reserved
      </p>
    </div>
  </footer>
)

export default Footer
