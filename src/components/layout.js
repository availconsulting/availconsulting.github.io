/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          homeTitle
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
        <Header siteTitle={data.site.siteMetadata.homeTitle} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1040,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer style={{ background: 'hsl(270, 50%, 40%)', height: 135 }}>
          <div style={{textAlign: 'center'}}>
            <p style={{ paddingTop: 15, color: 'white' }} ><a style={{ color: 'white' }} href="mailto:availconsulting@sbcglobal.net">Email</a> | <a style={{ color: 'white' }} href="https://academyleadership.com/tompos/" target="_blank" rel="noopener noreferrer">Academy Leadership</a> | <a style={{ color: 'white' }} href="https://calendly.com/availconsulting" target="_blank" rel="noopener noreferrer">Calendly</a>
            <br/>
            <br/>
            <b>Woman Veteran Owned</b>
            <br/>
            © {new Date().getFullYear()}, Built with
              {` `}
            <a style={{ color: 'white' }} href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a></p>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
