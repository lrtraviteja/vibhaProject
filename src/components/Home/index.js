import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">WE CARE FOR YOU</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          We have made it easier than ever to create a timetable best suited to
          your needs. Your customized timetable is just one click away
        </p>
        <div className="buttons-container">
          <button type="button" className="info-button">
            GENERATE TIMETABLE
          </button>
          <button type="button" className="generate-button">
            ADD INFORMATION
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">COURSES</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          You can easily add courses into database by just clicking the button
          below. This data will be retrieved while generating the timetable.
        </p>
        <div className="buttons-container">
          <Link to="/courses">
            <button type="button" className="generate-button">
              ADD COURSE
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">PROFESSORS</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Professors data will be saved in the database. You will be directed to
          the Professor Form where you will add the Information about Professor.
        </p>
        <div className="buttons-container">
          <Link to="/professors">
            <button type="button" className="generate-button">
              ADD PROFESSOR
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">CLASSROOMS</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          In this app, you have facility to add more than one class at a time,
          and it will generate the suitable timetable for you with you can
          access anytime in your account.
        </p>
        <div className="buttons-container">
          <Link to="/classrooms">
            <button type="button" className="generate-button">
              ADD CLASSROOM
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
