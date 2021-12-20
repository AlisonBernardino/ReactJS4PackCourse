import React, { useState } from 'react';
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
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [currentCourse,setCurrentCourse]=useState('')
  const [gender,setGender]=useState('')

  // "Course" details form + React State hooks
  const [courseForm,setCourseForm]=useState({"specifiedTitle":"","specifiedInstitution":"","specifiedPeriod":""})
  const handleCourseFormChange=(formChangeElement)=>{
    if(formChangeElement.target.getAttribute('name')=='titleField'){
      setCourseForm({"title":formChangeElement.target.value,"institution":courseForm.institution,"period":courseForm.period})
    }else if(formChangeElement.target.getAttribute('name')=='institutionField'){
      setCourseForm({"title":courseForm.title,"institution":formChangeElement.target.value,"period":courseForm.period})
    }else if(formChangeElement.target.getAttribute('name')=='periodField'){
      setCourseForm({"title":courseForm.title,"institution":courseForm.institution,"period":formChangeElement.target.value})
    }
  }

  // "Time availability"
  const [morningTime,setMorningTime]=useState(0)
  const [afternoonTime,setAfternoonTime]=useState(0)
  const [nightTime,setNightTime]=useState(0)

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
      setColor(1)
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
  const handleCurrentCourse=(currentCourseElement)=>{
    setCurrentCourse(currentCourseElement.target.value)
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
        <br />
        <p> Second paragraph test - All set!</p>
        <br />
        <a href="https://www.youtube.com" target='_blank'>Go to YouTube!</a>
      </header>
      <section className='text'>
        <img src={Image02} />
        <p>Notification A = {specificText}</p>
        <br />
        <p>{'Notification B = ' + userMessage}</p>
        <br />
      </section>
      <MainHead></MainHead>
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
      <BlueYellowButton turnedOn={turnedOn} setTurnedOn={setTurnedOn}></BlueYellowButton>
      <a href="http://google.com" target='_blank' onClick={(execution) => cancelOperation(execution)}> Search on Google...</a>
      <ul>{coursesList}</ul>
      <ul>{certificationDetailsList}</ul>

      <h2> Basic student data </h2>
      <label>
        First name:
      </label>
      <br/>
      <input type="text" name="firstNameField" value={firstName} onChange={(firstNameElement)=>setFirstName(firstNameElement.target.value)} />
      <br/>
      <label>
        Last name:
      </label>
      <br/>
      <input type="text" name="lastNameField" value={lastName} onChange={(lastNameElement)=>setLastName(lastNameElement.target.value)}/>
      <br/>
      <label> 
        Current course:
      </label>
      <br/>
      <input type="text" name="currentCourseField" value={currentCourse} onChange={(currentCourseElement)=>handleCurrentCourse(currentCourseElement)}/>
      <br/>
      <label> Gender: </label>
      <br/>
      <select values={gender} onChange={(genderElement)=>setGender(genderElement.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <br/>
      <h2> Selected course data: </h2>
      <label> Title: </label>
      <br/>
      <input type="text" name="titleField" value={courseForm.title} onChange={(formChangeElement)=>handleCourseFormChange(formChangeElement)}/>
      <br/>
      <label>
        Institution:
      </label>
      <br/>
      <input type="text" name="institutionField" value={courseForm.institution} onChange={(formChangeElement)=>handleCourseFormChange(formChangeElement)}/>
      <br/>
      <label>
        Period:
      </label>
      <br/>
      <input type="text" name="periodField" value={courseForm.period} onChange={(formChangeElement)=>handleCourseFormChange(formChangeElement)}/>
      <br/>
      <StudentAvailableTime num={1} period={"(Morning)"} time={morningTime} setTime={setMorningTime}></StudentAvailableTime>
      <StudentAvailableTime num={2} period={"(Afternoon)"} time={afternoonTime} setTime={setAfternoonTime}></StudentAvailableTime>
      <StudentAvailableTime num={3} period={"(Night)"} time={nightTime} setTime={setNightTime}></StudentAvailableTime>
      <TotalAvailableTime timeSum={(parseFloat(morningTime) + parseFloat(afternoonTime) + parseFloat(nightTime))}></TotalAvailableTime>
      <h3> Registered information: </h3>
      <h4> Personal student data </h4>
      <p> First name = {firstName}</p>
      <p> Last name = {lastName}</p>
      <p> Current course = {currentCourse}</p>
      <p> Gender = {gender}</p>
      <br/>
      <h4>Course data:</h4>
      <p> Title = {courseForm.title}</p>
      <p> Institution = {courseForm.institution}</p>
      <p> Period = {courseForm.period}</p> 
    </>
  )
}

export default App;

