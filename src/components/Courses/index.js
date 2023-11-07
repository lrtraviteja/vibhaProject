import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Products extends Component {
  state = {
    courseID: '',
    courseName: '',
    creditHours: '',
    showSubmitError: false,
  }

  onChangeCourseID = event => {
    this.setState({courseID: event.target.value})
  }

  onChangeCourseName = event => {
    this.setState({courseName: event.target.value})
  }

  //   submitForm = async event => {
  //     event.preventDefault()
  //     const {courseID, courseName} = this.state
  //     const userDetails = {courseID, courseName}
  //     const url = 'https://apis.ccbp.in/login'
  //     const options = {
  //       method: 'POST',
  //       body: JSON.stringify(userDetails),
  //     }
  //     const response = await fetch(url, options)
  //     const data = await response.json()
  //     if (response.ok === true) {
  //       this.onSubmitSuccess(data.jwt_token)
  //     } else {
  //       this.onSubmitFailure(data.error_msg)
  //     }
  //   }

  renderCourseNameField = () => {
    const {courseName} = this.state

    return (
      <>
        <label className="input-label" htmlFor="courseName">
          Course name*
        </label>
        <input
          type="courseName"
          id="courseName"
          className="input-field"
          value={courseName}
          onChange={this.onChangeCourseName}
          placeholder="course name"
        />
      </>
    )
  }

  renderCourseIDField = () => {
    const {courseID} = this.state

    return (
      <>
        <label className="input-label" htmlFor="courseID">
          Course id*
        </label>
        <input
          type="text"
          id="courseID"
          className="input-field"
          value={courseID}
          onChange={this.onChangeCourseID}
          placeholder="course id"
        />
      </>
    )
  }

  renderCreditHoursField = () => {
    const {creditHours} = this.state

    return (
      <>
        <label className="input-label" htmlFor="creditHours">
          Credit hours*
        </label>
        <input
          type="text"
          id="creditHours"
          className="input-field"
          value={creditHours}
          onChange={this.onChangeCourseID}
          placeholder="course hours"
        />
      </>
    )
  }

  render() {
    const {showSubmitError} = this.state

    return (
      <>
        <Header />
        <div className="login-form-container">
          <form className="form-container">
            <h1>ADD COURSE</h1>
            <div className="input-container">{this.renderCourseIDField()}</div>
            <div className="input-container">
              {this.renderCourseNameField()}
            </div>
            <div className="input-container">
              {this.renderCreditHoursField()}
            </div>
            <button type="submit" className="login-button">
              SAVE COURSE
            </button>
            {showSubmitError && (
              <p className="error-message">* marked as are required</p>
            )}
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-mobile-img"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-img"
            alt="website login"
          />
        </div>
      </>
    )
  }
}

export default Products
