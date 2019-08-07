import React from "react"
import {Link} from 'gatsby';

const Header = () => (
  <header className="bg-white black-80 tc pt4 avenir">
    <h1 className="mt2 mb0 baskerville i fw1 f1">Fahd</h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">Handmade Surfboards</h2>
    <nav className="bt bb tc  center mt4">
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        to="/"
      >
        Home
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        to="/surfboards"
      >
        Surfboards
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        to="/shop"
      >
        Shop
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
        to="/about"
      >
        About
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  </header>
)

export default Header
