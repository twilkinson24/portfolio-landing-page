import React from "react"
import { Link } from "gatsby"

import HomepageLayout from "../components/homepage/homepage-layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import AboutMe from "../components/about-me"

const IndexPage = () => (
  <HomepageLayout>
    <SEO title="Home" />
    
    <div className="hero flex flex-wrap md items-center h-screen">
      <p>Hi</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>
  </HomepageLayout>
)

export default IndexPage
