import React from "react"

import Layout from "../components/layout"
import Bridge from "../components/photos/bridge"
import Road from "../components/photos/road"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: green;
  a {
    text-decoration: none;
    color: goldenrod;
  }
`

const ConnectPage = () => (
  <Layout>
    <SEO title="Connect" />
    <H1 style={{ textAlign: 'center' }}>
      Connect with Us!
    </H1>

    <div style={{ marginLeft: '12.5%', marginRight: '12.5%' }}><Bridge /></div>
    <p style={{ textAlign: 'right', marginLeft: '12.5%', marginRight: '12.5%' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>

    <h3>Let’s do what we can to change the world for good and let’s start with ourselves.</h3>
    <p>Please let us know how we may best work together to make a positive and impactful difference as you and your team become the leaders you were meant to be!</p>
    <br/>

    <table>
      <tr>
        <td>
          <h2>Email</h2>
          <p style={{ paddingBottom: 10}} ><a href="mailto:availconsulting@sbcglobal.net">availconsulting@sbcglobal.net</a></p>
          <h2>Academy Leadership</h2>
          <p style={{ paddingBottom: 10}} ><a href="https://academyleadership.com/tompos/" target="_blank" rel="noopener noreferrer">Lori Tompos, Facilitator</a>
          </p>
          <h2>Calendly</h2>
          <p style={{ paddingBottom: 10}} ><a href="https://calendly.com/availconsulting" target="_blank" rel="noopener noreferrer">Personalized Sessions with Avail</a></p>
        </td>
        <td style={{ textAlign: 'right' }} >
          <Road />
          <p style={{ textAlign: 'right' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>
        </td>
      </tr>
    </table>

    <br/>
    <h2 style={{ textAlign: 'center' }}>Lead Well</h2>
  </Layout>
)

export default ConnectPage
