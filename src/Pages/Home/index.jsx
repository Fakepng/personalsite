import React from 'react'
import './Home.css';
import Countdown from './../../components/Countdown';

const Home = () => {
  return (
    <div className="Home">
      <h1>Hello!</h1>
      <p className='message'>Hello my name is Fakepng. I am a high school student with a passion for coding.</p>
      <br />
      <p>Days until I have finished grades 11</p>
      <Countdown countdownTimestampMs={1645778400000}/>
    </div>
  )
}

export default Home