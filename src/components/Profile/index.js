import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, position },
    } = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        position
        author
        description
        title
      }
    }
  }
`)
  return(
    <div className="Profile-wrapper">
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}



export default Profile
