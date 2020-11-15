import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import MainNav from "./main-nav"



function Header({ siteTitle, logoImg }) {

    const logoSources = [
      logoImg.childImageSharp.fixed,
      {
        ...logoImg.childImageSharp.fixed
      },
    ]

    return (
      <header className="bg-white" >
        <div className="container">
          <div className="flex justify-between">
            <h2>
              <Link
                to="/"
                className="text-red-500"
              >
                <span className="sr-only">{siteTitle}</span>
                <Img fixed={logoSources} />
              </Link>
            </h2>
            <MainNav />
          </div>
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
