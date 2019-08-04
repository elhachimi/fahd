import React from "react"

const Header = () => (
  <header className="bg-white black-80 tc pt4 avenir">
    <h1 className="mt2 mb0 baskerville i fw1 f1">Fahd</h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">Handmade Surfboards</h2>
    <nav className="bt bb tc  center mt4">
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        href="/"
      >
        Home
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        href="/portfolio"
      >
        Surfboards
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        href="/shop"
      >
        Shop
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
        href="/about"
      >
        About
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="/contact"
      >
        Contact
      </a>
    </nav>
  </header>
)

export default Header
