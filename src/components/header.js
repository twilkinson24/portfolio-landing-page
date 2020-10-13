import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"



function Header({ siteTitle, logoImg }) {

    const logoSources = [
      logoImg.childImageSharp.fixed,
      {
        ...logoImg.childImageSharp.fixed
      },
    ]

    return (
      <header
        className="bg-white"
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h2>
            <Link
              to="/"
              className="text-red-500"
            >
              <span className="sr-only">{siteTitle}</span>
              <Img fixed={logoSources} />
            </Link>
          </h2>
        </div>
      </header>
  );
}



// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
