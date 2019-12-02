import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'


// import { Container } from './styles';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath:{ eq: "profile.png" }) {
            childImageSharp {
                fixed(width: 60, height:60){
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }}
        `
    )
    return (<Img fixed={avatarImage.childImageSharp.fixed} />)
}


export default Avatar
