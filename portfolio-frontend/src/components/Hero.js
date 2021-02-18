import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Salar!!</h1>
          <h4>Studerar systemutveckling på TUC.</h4>
          - 🔭 Jobbar just nu på min portfölj
          <br />
          - ⚡ Fun fact: I used to smelt metal
          
          <br />
            - 📫 Vill du nå mig? tryck på länken nedan :)
            <br />
          <Link to="/concact" className="btn">
            Kontakta mig
          </Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  
  </header>
}

export default Hero
