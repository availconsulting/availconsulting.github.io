import React from "react"

import Layout from "../components/layout"
import CloseBoats from "../components/photos/closeboats"
import ALSeal from "../components/photos/alseal"
import Collaboration from "../components/photos/collaboration"
import Productivity from "../components/photos/productivity"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: green;
  a {
    text-decoration: none;
    color: goldenrod;
  }
`

const ProgramsPage = () => (
  <Layout>
    <SEO title="Programs" />
    <H1 style={{ textAlign: 'center' }}>
      Our Offerings
    </H1>

    <CloseBoats />
    <p style={{ textAlign: 'right' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>

    <h2>What We Do &amp; How</h2>

    <p>Avail Consulting’s purpose is to inspire, engage, and motivate people to be the impactful leaders they were meant to be. Strong, supportive, and innovative corporate culture is driven by effective leadership, collaborative teamwork, and efficient productivity. These capabilities are our areas of focus.</p>
    <br/>

    <h4>Effective Leadership</h4>
    <table>
        <tbody>
            <tr>
                <td>
                    <ul>
                        <li>Leadership Excellence Course &amp; Executive Coaching</li>
                        <li>Leadership Foundations Course</li>
                        <li>Leadership Boot Camp &amp; Performance Coaching</li>
                        <li>The Leader’s Compass Workshop</li>
                        <li>Advanced Leadership Course &amp; Executive Coaching</li>
                    </ul>
                    <p>Visit the <a href="https://academyleadership.com/tompos/" target="_blank" rel="noopener noreferrer" aria-label='AL'>Academy Leadership</a> facilitator page</p>
                </td>
                <td style={{ textAlign: 'right'}} >
                    <a href="https://academyleadership.com/tompos/" target="_blank" rel="noopener noreferrer" aria-label='AL'><ALSeal /></a>
                </td>
            </tr>
        </tbody>
    </table>

    <h4>Collaborative Teamwork</h4>
    <table>
        <tr>
            <td>
                <ul>
                    <li><a href="https://teamclock.com/" target="_blank" rel="noopener noreferrer">The Team Clock</a></li>
                    <li>5 Behaviors of a Cohesive Team (for both Teams and Individuals)</li>
                    <li>Agile EQ (EQ Mindsets)</li>
                    <li>Delivering 360 Constructive Feedback</li>
                </ul>
            </td>
            <td style={{ textAlign: 'right'}} >
                <Collaboration />
            </td>
        </tr>
    </table>

    <h4>Efficient Productivity</h4>
    <table>
        <tr>
            <td>
                <ul>
                    <li>Emotional Intelligence</li>
                    <li>Change Agility</li>
                    <li>Effective Communication</li>
                    <li>Productive Conflict</li>
                </ul>
            </td>
            <td style={{ textAlign: 'right'}} >
                <Productivity />
            </td>
        </tr>
    </table>

    <br/>
    <h3 style={{ textAlign: 'center'}}>Let’s equip for effective leadership!</h3>

  </Layout>
)

export default ProgramsPage
