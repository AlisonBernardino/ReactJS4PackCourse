import React, { useEffect, useState } from 'react';
import Logo from './components/images/344404.png';
import Image02 from './components/images/912633.png';
import MainHead from './components/MainHead';
import DoubtsArea from './components/DoubtsArea';
import ReleasePageConfig from './components/ReleasePageConfig';
import Data from './components/Data';
import BlueYellowButton from './components/BlueYellowButton';
import RedGreenLights from './components/RedGreenLed';
import StudentAvailableTime from './components/StudentAvailableTime';
import TotalAvailableTime from './components/TotalAvailableTime';
import FrontEndDescription from './components/FrontEndDescription';
import BackEndDescription from './components/BackEndDescription';
import CourseTopicsClass from './components/CourseTopicsClass'
import SchoolCampus from './components/SchoolCampus'
import BaseComponent from './components/BaseComponent'
import GlobalNotations from './components/GlobalNotations'
import InformativeClass from './components/InformativeClass'
import './App.css'

function App() {
  const specificText = 'Learning ReactJS!'
  const userMessage = 'This subject is very important.'
  const groupsMessage = () => {
    return ('We have 03 students groups')
  }

  function studentBenefits() {
    return 'The students received the benefits!'
  }

  // Const group - Props
  const Area01 = 'Text here 01';
  const Area02 = 'Text here 02';

  const studentBonusNotification = () => {
    return 'GOLDEN time! Courses 50% off.'
  }

  const sumBenefits = (benefitA, benefitB) => {
    return benefitA + benefitB;
  }

  // === Using state hooks ===
  // Starting uses
  const [age, setAge] = useState(1)
  const [turnedOn, setTurnedOn] = useState(false)
  const [isGreen, setGreen] = useState(false)
  const [login, setLogin] = useState(false)
  const [color, setColor] = useState(1)

  // "Basic form" 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [currentCourse, setCurrentCourse] = useState('')
  const [gender, setGender] = useState('')

  // "Course" details form + React State hooks
  const [courseForm, setCourseForm] = useState({ "specifiedTitle": "", "specifiedInstitution": "", "specifiedPeriod": "" })
  const handleCourseFormChange = (formChangeElement) => {
    if (formChangeElement.target.getAttribute('name') == 'titleField') {
      setCourseForm({ "title": formChangeElement.target.value, "institution": courseForm.institution, "period": courseForm.period })
    } else if (formChangeElement.target.getAttribute('name') == 'institutionField') {
      setCourseForm({ "title": courseForm.title, "institution": formChangeElement.target.value, "period": courseForm.period })
    } else if (formChangeElement.target.getAttribute('name') == 'periodField') {
      setCourseForm({ "title": courseForm.title, "institution": courseForm.institution, "period": formChangeElement.target.value })
    }
  }

  // "Time availability" using handler
  const [availableTime, setAvailableTime] = useState({ "time1": "0", "time2": "0", "time3": "0" })
  const handleAvailableTime = (timeHandlerElement) => {
    if (timeHandlerElement.target.getAttribute('name') == 'time1') {
      setAvailableTime({ "morningTime": timeHandlerElement.target.value, "afternoonTime": availableTime.afternoonTime, "nightTime": availableTime.nightTime })
    } else if (timeHandlerElement.target.getAttribute('name') == 'time2') {
      setAvailableTime({ "morningTime": availableTime.morningTime, "afternoonTime": timeHandlerElement.target.value, "nightTime": availableTime.nightTime })
    } else if (timeHandlerElement.target.getAttribute('name') == 'time3') {
      setAvailableTime({ "morningTime": availableTime.morningTime, "afternoonTime": availableTime.afternoonTime, "nightTime": timeHandlerElement.target.value })
    }
  }

  let ageValue = 32

  const add01 = () => {
    ageValue = 1
    console.log(ageValue)
  }

  const cancelOperation = (object) => {
    return object.preventDefault()
  }

  const welcomeMessage = () => {
    const time = new Date().getHours()
    if (time >= 0 && time < 13) {
      return <p> Good morning!</p>
    } else if (time >= 13 && time < 18) {
      return <p> Good afternoon! </p>
    } else {
      return <p> Good evening! </p>
    }
  }

  // "Message color changer" colors
  const redColor = { color: '#f00' }
  const greenColor = { color: '#0f0' }
  const blueColor = { color: '#00f' }

  const pickAColor = (colorNumber) => {
    if (colorNumber == 1) {
      return redColor
    } else if (colorNumber == 2) {
      return greenColor
    } else {
      return blueColor
    }
  }

  const changeColor = () => {
    setColor(color + 1)
    if (color > 2) {
      setColor(0)
    }
  }

  // Comment the line 88 to stop the "Ideas Factory"
  // logo color animation
  setInterval(changeColor, 1000)

  const schoolCourses = ['Administration', 'Marketing', 'Computer Science', 'Data analysis', 'UX/UI']
  const coursesList = schoolCourses.map(
    (course, courseIndex) =>
      <li key={courseIndex}>{courseIndex += 1} - {course}</li>
  )

  // JSON objects array - Certifications
  const certifications = [
    { module: "FrontEnd", title: "FrontEnd specialist", price: "5000.00" },
    { module: "BackEnd", title: "Double BackEnd", price: "8600.00" },
    { module: "UX/UI", title: "User interface depth", price: "6000.00" },
    { module: "Administration", title: "Resources Manager+", price: "5200.00" }
  ];

  const certificationDetailsList = certifications.map(
    (certification, certificationIndex) =>
      <li key={certificationIndex}>Certification {certificationIndex += 1} - Module: {certification.module} // Title: {certification.title} // Price: R$ {certification.price}</li>
  )

  // Handling the "Current course" data 
  const handleCurrentCourse = (currentCourseElement) => {
    setCurrentCourse(currentCourseElement.target.value)
  }

  // Starting "useEffect" hook use
  const [count, setCount] = useState(0)
  useEffect(
    () => console.log("UseEffect use test - All set!")
  )

  // Using localStorage - Set, Get and Remove (CRUD base)
  // localStorage.setItem("studentPlan","Common");
  // localStorage.getItem("studentType");
  // localStorage.removeItem("studentType");

  const [studyPlan, setStudyPlan] = useState()

  const create = (index, content) => {
    localStorage.setItem(index, content)
  }

  const read = (index) => {
    alert(localStorage.getItem(index))
  }

  const erase = (index) => {
    localStorage.removeItem(index)
  }

  // Component lifecycle - Direct use
  const [campusData, setCampusData] = useState(true)
  const showOrHideCampusData = () => {
    setCampusData(!campusData)
  }

  return (
    <>
      <header className='customStyle'>
        <ReleasePageConfig />
        {welcomeMessage()}
        <RedGreenLights isGreen={isGreen} setGreen={setGreen}></RedGreenLights>
        <img src={Logo} />
        <h1 style={pickAColor(color)}> Ideas Factory </h1>
        <button onClick={() => changeColor()}>Change color</button>
        <p> Second paragraph test - All set!</p>
        <br />
        <a href="https://www.youtube.com" target='_blank'>Go to YouTube!</a>
      </header>
      <section className='text'>
        <hr />
        <img src={Image02} />
        <p>Notification A = {specificText}</p>
        <br />
        <p>{'Notification B = ' + userMessage}</p>
        <br />
      </section>
      <hr />
      <MainHead></MainHead>
      <hr />
      <DoubtsArea></DoubtsArea>
      <Data userNickname='SpeedSamurai'
        userFullName='Alison Bernardino'
        userCourse='Fullstack' userSemester='1'
        extraArea001={Area01} extraArea002={Area02}
        bonusMessage={studentBonusNotification}
        sumBenefits={sumBenefits}></Data>
      <p> User age = {age}</p>

      {/* Non functional method */}
      {/* <button onClick={()=>add01()}>Add +1</button> */}

      {/* Functional method */}
      <button onClick={() => setAge(age + 1)}>Add +1</button>
      <hr />
      <BlueYellowButton turnedOn={turnedOn} setTurnedOn={setTurnedOn}></BlueYellowButton>
      <br />
      <a href="http://google.com" target='_blank' onClick={(execution) => cancelOperation(execution)}> Search on Google...</a>
      <hr />
      <ul>{coursesList}</ul>
      <ul>{certificationDetailsList}</ul>
      <hr />
      <h2> Basic student data </h2>
      <label>
        First name:
      </label>
      <br />
      <input type="text" name="firstNameField" value={firstName} onChange={(firstNameElement) => setFirstName(firstNameElement.target.value)} />
      <br />
      <label>
        Last name:
      </label>
      <br />
      <input type="text" name="lastNameField" value={lastName} onChange={(lastNameElement) => setLastName(lastNameElement.target.value)} />
      <br />
      <label>
        Current course:
      </label>
      <br />
      <input type="text" name="currentCourseField" value={currentCourse} onChange={(currentCourseElement) => handleCurrentCourse(currentCourseElement)} />
      <br />
      <label> Gender: </label>
      <br />
      <select values={gender} onChange={(genderElement) => setGender(genderElement.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <h2> Selected course data: </h2>
      <label> Title: </label>
      <br />
      <input type="text" name="titleField" value={courseForm.title} onChange={(formChangeElement) => handleCourseFormChange(formChangeElement)} />
      <br />
      <label>
        Institution:
      </label>
      <br />
      <input type="text" name="institutionField" value={courseForm.institution} onChange={(formChangeElement) => handleCourseFormChange(formChangeElement)} />
      <br />
      <label>
        Period:
      </label>
      <br />
      <input type="text" name="periodField" value={courseForm.period} onChange={(formChangeElement) => handleCourseFormChange(formChangeElement)} />
      <br />
      {/* LocalStorage use */}
      <label>Studies plan: </label>
      <br />
      <input type="text" value={studyPlan} onChange={(studyPlanElement) => setStudyPlan(studyPlanElement.target.value)} />
      <br />
      <button onClick={() => create('localStoreData', studyPlan)}>Add</button>
      <button onClick={() => read('localStoreData')}>List</button>
      <button onClick={() => erase('localStoreData')}>Remove</button>

      <StudentAvailableTime num={1} timeName={'time1'} period={"(Morning)"} time={availableTime.morningTime} setTime={handleAvailableTime}></StudentAvailableTime>
      <StudentAvailableTime num={2} timeName={'time2'} period={"(Afternoon)"} time={availableTime.afternoonTime} setTime={handleAvailableTime}></StudentAvailableTime>
      <StudentAvailableTime num={3} timeName={'time3'} period={"(Night)"} time={availableTime.nightTime} setTime={handleAvailableTime}></StudentAvailableTime>
      <TotalAvailableTime timeSum={(parseFloat(availableTime.morningTime) + parseFloat(availableTime.afternoonTime) + parseFloat(availableTime.nightTime))}></TotalAvailableTime>
      <hr/>
      <h3> Registered information: </h3>
      <h4> Personal student data </h4>
      <p> First name = {firstName}</p>
      <p> Last name = {lastName}</p>
      <p> Current course = {currentCourse}</p>
      <p> Gender = {gender}</p>
      <br />
      <h4>Course data:</h4>
      <p> Title = {courseForm.title}</p>
      <p> Institution = {courseForm.institution}</p>
      <p> Period = {courseForm.period}</p>
      <br />
      <hr/>
      <h1> FrontEnd description </h1>
      <FrontEndDescription website="www.google.com.br">
        {/* All the code inside these tags are considered
         as "Children props"
         To activate them, type "props" inside
         the father element (In this case, 
         FrontEndDescription.js)
         */}
        <p> You can Google this theme for more information!</p>
        <p> Access this link: </p>
      </FrontEndDescription>
      <br />
      <hr/>
      <h1> BackEnd description </h1>
      <BackEndDescription></BackEndDescription>
      <p> Enjoying School Website? Please, rate us: </p>
      <p> Stars: {count}</p>
      <button onClick={() => setCount(count + 1)}> +1 star </button>
      <br />
      <hr/>
      <CourseTopicsClass location="Main topics"></CourseTopicsClass>
      {campusData ?
        <SchoolCampus valueFactor={2}></SchoolCampus> : ''}
      <br />
      <button onClick={() => showOrHideCampusData()}>Show/Hide campus data</button>
      <br />
      <hr/>
      <BaseComponent></BaseComponent>
      <br />
      <hr/>
      <InformativeClass></InformativeClass>
    </>
  )
}

export default App;

