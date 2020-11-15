import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"


// import headShot from '../images/avatar-tw.jpg'
// import scrollTo from 'gatsby-plugin-smoothscroll';


const AboutMe = () => {

    const data = useStaticQuery(graphql`
        query aboutSectionHeadshot {
            siteLogo: file(relativePath: { eq: "avatar-tw.jpg" }) {
                childImageSharp {
                    fixed(width: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const headshotImgSources = [
        data.siteLogo.childImageSharp.fixed,
        {
          ...data.siteLogo.childImageSharp.fixed
        },
      ]

        return (
        <div className="container">
            <section className="section" id="about-me">
                <div className="flex">
                    <div className="w-full md:w-7/12">
                        <div className="about-me-text">
                            <h3 className="title is-3 text-orange">About Me</h3>
                            <h4 className="title is-4">WordPress Developer | Front-End Developer</h4>
                            <p><span className="bottom-line"></span></p>
                            <p>A life-long learner from the great state of Michigan,
                                I discovered a passion for web development and haven’t looked back since!
                            </p>
                            <p>
                                I love finding practical solutions and collaborating with quality
                                people to build web sites and web applications.
                            </p>
                            <p>
                                If you're interested, I invite you to learn more about the <Link to='/blog/my-favorite-development-tools'>tools I use to build websites</Link> or the 
                                 <a href="#"> services I offer</a>.
                            </p>
                            <p>
                                <em>
                                    Providing value for my clients is always the goal. 
                                </em>
                            </p>
                            <div className="cta-buttons">
                                <Link to="/work-together" className="button button--inverted button--ujarak bg-dark-blue">
                                    Hire Me
                                </Link>
                                <a href="#" className="button blue-bg-trans button button--ujarak">
                                    Say What's Up
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12">
                        <div className="about-me-img">
                            {/* <Img fixed={headshotImgSources} alt="aylor Wilkinson - Gatsby and WordPress Developer" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;