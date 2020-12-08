import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import MainNav from "../main-nav"

import HeroBGImage from './hero-bg-image'



function HomepageHeader({ siteTitle, logoImg }) {

    const logoSources = [
      logoImg.childImageSharp.fixed,
      {
        ...logoImg.childImageSharp.fixed
      },
    ]

    return (
      <header className="bg-white" >
        <div className="container py-2">
          <div className="flex justify-between">
            <h2>
              <Link
                to="/"
              >
                <span className="sr-only">{siteTitle}</span>
                <Img fixed={logoSources} />
              </Link>
            </h2>
            <MainNav />
          </div>
        </div>
        <HeroBGImage />
      </header>
  );
}



// HomepageHeader.propTypes = {
//   siteTitle: PropTypes.string,
// }

// HomepageHeader.defaultProps = {
//   siteTitle: ``,
// }

export default HomepageHeader
