import React from 'react';
import Logo from './components/images/344404.png';
import Image02 from './components/images/912633.png';
import './App.css';
import MainHead from './components/MainHead';
import DoubtsArea from './components/DoubtsArea';
import Data from './components/Data';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test message. Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// 2nd bullet - Start
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

  return (
    <>
      <header>
        <img src={Logo} />
        <p> Paragraph test - All set!</p>
        <br />
        <p> Second paragraph test - All set!</p>
        <br />
      </header>
      <section>
        <img src={Image02} />
        <p>Notification A = {specificText}</p>
        <br />
        <p>{'Notification B = ' + userMessage}</p>
        <br />
        <img src='/BooksPile.png'></img>
      </section>
      <MainHead></MainHead>
      <DoubtsArea></DoubtsArea>
      <Data userNickname='SpeedSamurai' 
      userFullName='Alison Bernardino' 
      userCourse='Fullstack' userSemester='1'
      extraArea001={Area01} extraArea002={Area02}></Data>
    </>
  )
}

export default App;

// 2nd bullet - End

