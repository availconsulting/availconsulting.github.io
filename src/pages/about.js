import React from "react"

import Layout from "../components/layout"
import LoriHeadshot from "../components/photos/loriheadshot"
import FarBoats from "../components/photos/farboats"
import AvailVendiagram from "../components/photos/availvendiagram"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: green;
  a {
    text-decoration: none;
    color: goldenrod;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <H1 style={{ textAlign: 'center' }}>
      The Story of Avail
    </H1>

    <FarBoats />
    <p style={{ textAlign: 'right' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>

    <h2>Meet Lori</h2>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <LoriHeadshot />
    </div>
    <p>
      Lori’s purpose is to empower, motivate, and inspire leaders.  She is the CEO of Avail Consulting.  Lori has experience with and passion for developing impactful leaders of character and collaborative teams by focusing on positive strengths, strategic insights, and innovative solutions.
      <br/>
      <br/>
      Lori is a West Point graduate from the US Military Academy, one of the first women, and a combat veteran from the Gulf War.  Lori has over 20 years of experience successfully developing leaders and teams to optimal levels, initially in the US Army and now in Higher Education and Corporate America.  Lori’s career began in the US Army, where she identified and embraced a personal mission to develop and pursue positive and impactful leadership.
      <br/>
      <br/>
      Following her time at Accenture in Change Management, Lori was primarily focused on SAP projects and project team training.  Lori was then a Process Coach for the Strategy Courses and the premier Manager Course on Delivering Client Value, focused on integrated, experiential learning.
      <br/>
      <br/>
      Lori taught Leadership, Leading Change, and Managing Organizations for a revolutionary online MBA program using experiential goal-based learning for almost 16 years.  She transformed the Leading Change course as the Subject Matter Expert, in addition to teaching.  Lori has also creatively designed, innovatively developed, and effectively delivered several workshops, both online and in the classroom, plus three college courses in her role as an Adjunct Professor at Elmhurst University.
      <br/>
      <br/>
      Lori currently leverages her diverse experience to inspire, motivate, and empower exceptional leaders and admirable teams to increase their impact by building on each person’s unique strengths and capabilities through innovative programs and executive coaching.
      <br/>
    </p>
    <br/>

    <h2>About Avail Consulting</h2>

    <h4>Our Goals</h4>
    <table>
      <tr>
        <td>
          <ul>
            <li>Develop impactful leaders of character</li>
            <li>Equip teams to work together effectively</li>
            <li>Establish positive connections and professional relationships</li>
            <li>Build strong bonds for increased teamwork and collaboration</li>
            <li>Develop trust in and amongst team members and teams</li>
            <li>Cultivate a strong and supportive workplace culture that inspires leaders and their teams</li>
          </ul>

          <h4>Our Process</h4>
          <ul>
            <li>Define specific goals and desired results, reveal leadership profile assessments, and plan next steps</li>
            <li>Glean insights, establish Leadership Philosophy &amp; Action Plans via Workshop (either in person or virtually)</li>
            <li>Engage in Strategic Coaching for lasting impact and continued Success</li>
          </ul>

          <h4>Our Results</h4>
          <ul>
            <li>Increased Teamwork &amp; Collaboration</li>
            <li>Improved Engagement, Efficiency, &amp; Productivity in People</li>
            <li>Enhanced Leadership Capabilities &amp; Developed Potential</li>
            <li>Optimal Corporate Culture</li>
          </ul>
        </td>
        <td style={{ textAlign: 'right' }} >
          <AvailVendiagram />
        </td>
      </tr>
    </table>

    <h2>Academy Leadership</h2>

    <p><a href="https://academyleadership.com" target="_blank" rel="noopener noreferrer">Learn more about Academy Leadership</a></p>
  </Layout>
)

export default AboutPage
