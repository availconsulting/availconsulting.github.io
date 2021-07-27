import React from "react"

import Layout from "../components/layout"
import Safari from "../components/photos/safari"
import BigTrees from "../components/photos/bigtrees"
import LeadersCompass from "../components/photos/leaderscompass"
import LeadershipTurbulentTimes from "../components/photos/leadershipturbulenttimes"
import StartWithWhy from "../components/photos/startwithwhy"
import TakeYourTurn from "../components/photos/takeyourturn"
import FourStages from "../components/photos/fourstages"
import SevenHabits from "../components/photos/seven_habits"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: green;
  a {
    text-decoration: none;
    color: goldenrod;
  }
`

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <H1 style={{ textAlign: 'center' }}>
      Our Expertise
    </H1>

    <div style={{ marginLeft: '12.5%', marginRight: '12.5%' }}><BigTrees /></div>
    <p style={{ textAlign: 'right', marginLeft: '12.5%', marginRight: '12.5%' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>

    <h2>Leadership Articles</h2>
    <table>
      <tr>
        <td>
          <p>
            <i>"Meet at the intersection of passion and purpose"</i>
            <br/>
            <i><a href="https://www.linkedin.com/pulse/leader-you-were-born-lori-hess-tompos/?trackingId=VXhX11GNQj2smpZhQ2jAxw%3D%3D" target="_blank" rel="noopener noreferrer">Be the Leader You Were Meant To Be</a></i>
            <p style={{ color: 'gray' }}>
              Article by Lori Tompos
              <br/>
              Published May 11, 2021
            </p>
          </p>
        </td>
        <td>
          <Safari />
          <p style={{ textAlign: 'right' }}><a style={{ color: 'gray' }} href="https://www.instagram.com/wandering.camera.guy/" target="_blank" rel="noopener noreferrer">@wandering.camera.guy</a></p>
        </td>
      </tr>
    </table>

    <h2>Literary Contributions</h2>
    <table>
      <tr>
        <td>
          <TakeYourTurn />
        </td>
        <td>
        <p>
          <i>"I often get asked the question: 'Are leaders born or made?' I always say 'Yes'. Leaders are born and made, through hard work, perseverance, personal development, and opportunity. You may have been granted some gifts in terms of leadership abilities, but you want to hone, cultivate, and curate them - so you are the best leader that you can be."</i>
          <br/>
          <p>
            <i><a href="https://www.amazon.com/Take-Your-Turn-Leadership-Success/dp/1513676970/ref=sr_1_1?dchild=1&keywords=take+your+turn&qid=1620343816&sr=8-1" target="_blank" rel="noopener noreferrer">Take Your Turn! A Leadership Guide to Success for Young Women</a></i>
            <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://www.amazon.com/Tonya-L-Carter/e/B08WWKHD74/ref=dp_byline_cont_pop_book_1" target="_blank" rel="noopener noreferrer">Tonya L. Carter</a></p>
          </p>
        </p>
        </td>
      </tr>
    </table>
    <br/>

    <h2>Recommended Reading</h2>
    <p>
      <table>
        <tr>
          <td>
            <p>
              <b>Understand the importance of living by a Leadership Philosophy</b>
              <br/>
              <i><a href="https://www.amazon.com/Leaders-Compass-3rd-Leadership-Philosophy/dp/0972732381/ref=sr_1_2?crid=1WO561AL79KIL&dchild=1&keywords=the+leaders+compass+3rd+edition&qid=1620853473&sprefix=the+leaders+compass%2Caps%2C169&sr=8-2" target="_blank" rel="noopener noreferrer">The Leader's Compass, 3rd Edition</a></i>
              <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://www.amazon.com/Ed-Ruggero/e/B00IUK671I?ref=sr_ntt_srch_lnk_2&qid=1621542783&sr=1-2" target="_blank" rel="noopener noreferrer">Ed Ruggero</a> and Dennis F. Haley</p>
            </p>
          </td>
          <td style={{ textAlign: 'right'}} >
            <LeadersCompass />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Active leadership demonstrated through four US Presidents</b>
              <br/>
              <i><a href="https://www.amazon.com/gp/product/B079RLPFG7/ref=dbs_a_def_rwt_bibl_vppi_i2" target="_blank" rel="noopener noreferrer">Leadership: In Turbulent Times</a></i>
              <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://www.amazon.com/Doris-Kearns-Goodwin/e/B000APE4B6/ref=dp_byline_cont_pop_ebooks_1" target="_blank" rel="noopener noreferrer">Doris Kearns Goodwin</a></p>
            </p>
          </td>
          <td style={{ textAlign: 'right'}} >
            <LeadershipTurbulentTimes />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>“Your ‘Why’ is your central belief,” Start by defining your vision, mission, purpose, and values</b>
              <br/>
              <i><a href="https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447" target="_blank" rel="noopener noreferrer">Start with Why: How Great Leaders Inspire Everyone to Take Action</a></i>
              <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://www.amazon.com/Simon-Sinek/e/B002CB2SDC/ref=dp_byline_cont_pop_book_1" target="_blank" rel="noopener noreferrer">Simon Sinek</a></p>
            </p>
          </td>
          <td style={{ textAlign: 'right'}} >
            <StartWithWhy />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Expounds on the Team Clock® concept and extends the “Guide to Breakthrough Teams”</b>
              <br/>
              <i><a href="http://teamclock.com/books/the-4-stages-of-a-team/" target="_blank" rel="noopener noreferrer">The 4 Stages of a Team</a></i>
              <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://teamclock.com/about/" target="_blank" rel="noopener noreferrer">Steve Ritter</a></p>
            </p>
          </td>
          <td style={{ textAlign: 'right'}} >
            <FourStages />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Find out your most important habits and do your “High Payoff activities”</b>
              <br/>
              <i><a href="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1451639619/ref=sr_1_6?dchild=1&keywords=7+habits&qid=1620855454&sr=8-6" target="_blank" rel="noopener noreferrer">The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change</a></i>
              <p style={{ color: 'gray' }}>by <a style={{ color: 'gray' }} href="https://www.amazon.com/Stephen-R-Covey/e/B000AQ2VAQ?ref=sr_ntt_srch_lnk_2&qid=1621543522&sr=1-2" target="_blank" rel="noopener noreferrer">Stephen R. Covey</a></p>
            </p>
          </td>
          <td style={{ textAlign: 'right'}} >
            <SevenHabits />
          </td>
        </tr>
      </table>
    </p>
  </Layout>
)

export default ResourcesPage
