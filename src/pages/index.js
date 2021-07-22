import React from "react"

import Layout from "../components/layout"
import MountainLake from "../components/photos/mountainlake"
import LongTrees from "../components/photos/longtrees"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: green;
  a {
    text-decoration: none;
    color: goldenrod;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1 style={{ textAlign: 'center' }}>
      Developing Admirable Leaders &amp; Exceptional Teams!
    </H1>
    
    <p style={{ textAlign: 'center', marginBottom: -10 }}><MountainLake /></p>
    <p style={{ textAlign: 'right', marginRight: 150 }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>
    
    <h3>Get started <b>today</b> to become the impactful leader you were meant to be! <a href ="http://www.availconsulting.net/connect/">Let’s connect!</a></h3>

    <p>Avail Consulting’s purpose is to inspire, engage, and motivate people to be the impactful leaders they were meant to be.  We are driven with purpose for developing valuable leaders, effective teams, and engaged employees, thus cultivating a strong and supportive corporate culture.  We believe that people are our greatest assets.  Our mission is to properly assess, reveal insights, and inspire action to help people and organizations achieve their goals in the most impactful way possible!</p>

    <LongTrees />
    <p style={{ textAlign: 'right' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>

  </Layout>
)

export default IndexPage
