import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Classroom extends Component {
  state = {
    classRoomID: '',
    classRoomName: '',
    classRoomType: '',
    showSubmitError: false,
  }

  onChangeClassRoomID = event => {
    this.setState({classRoomID: event.target.value})
  }

  onChangeClassRoomName = event => {
    this.setState({classRoomName: event.target.value})
  }

  onChangeClassRoomType = event => {
    this.setState({classRoomType: event.target.value})
  }

  //   submitForm = async event => {
  //     event.preventDefault()
  //     const {classRoomID, classRoomName} = this.state
  //     const userDetails = {classRoomID, classRoomName}
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

  renderClassRoomNameField = () => {
    const {classRoomName} = this.state

    return (
      <>
        <label className="input-label" htmlFor="classRoomName">
          Classroom name*
        </label>
        <input
          type="text"
          id="classRoomName"
          className="input-field"
          value={classRoomName}
          onChange={this.onChangeClassRoomName}
          placeholder="classroom name"
        />
      </>
    )
  }

  renderClassRoomIDField = () => {
    const {classRoomID} = this.state

    return (
      <>
        <label className="input-label" htmlFor="classRoomID">
          Classroom id*
        </label>
        <input
          type="text"
          id="classRoomID"
          className="input-field"
          value={classRoomID}
          onChange={this.onChangeClassRoomID}
          placeholder="course id"
        />
      </>
    )
  }

  renderClassroomType = () => {
    const {classRoomType} = this.state

    return (
      <>
        <label className="input-label" htmlFor="classRoomType">
          Classroom type*
        </label>
        <input
          type="text"
          id="classRoomType"
          className="input-field"
          value={classRoomType}
          onChange={this.onChangeClassRoomType}
          placeholder="classroom type"
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
            <h1>CLASSROOM</h1>
            <div className="input-container">
              {this.renderClassRoomIDField()}
            </div>
            <div className="input-container">
              {this.renderClassRoomNameField()}
            </div>
            <div className="input-container">{this.renderClassroomType()}</div>
            <button type="submit" className="login-button">
              SAVE CLASS
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

export default Classroom
