import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Professor extends Component {
  state = {
    professorName: '',
    workingHours: '',
    showSubmitError: false,
  }

  onChangeWorkingHours = event => {
    this.setState({workingHours: event.target.value})
  }

  onChangeProfessorName = event => {
    this.setState({professorName: event.target.value})
  }

  //   submitForm = async event => {
  //     event.preventDefault()
  //     const {courseID, professorName} = this.state
  //     const userDetails = {courseID, professorName}
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

  renderProfessorNameField = () => {
    const {professorName} = this.state

    return (
      <>
        <label className="input-label" htmlFor="professorName">
          Professor name*
        </label>
        <input
          type="professorName"
          id="professorName"
          className="input-field"
          value={professorName}
          onChange={this.onChangeProfessorName}
          placeholder="professor name"
        />
      </>
    )
  }

  renderWorkingHoursField = () => {
    const {workingHours} = this.state

    return (
      <>
        <label className="input-label" htmlFor="workingHours">
          Working hours*
        </label>
        <input
          type="text"
          id="workingHours"
          className="input-field"
          value={workingHours}
          onChange={this.onChangeWorkingHours}
          placeholder="working hours"
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
          <form className="professor-form-container">
            <h1>PROFESSOR INFO</h1>

            <div className="input-container">
              {this.renderProfessorNameField()}
            </div>
            <div className="input-container">
              {this.renderWorkingHoursField()}
            </div>
            <button type="submit" className="login-button">
              SAVE HERE
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

export default Professor
