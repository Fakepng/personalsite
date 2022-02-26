import React from 'react'
import './Home.css';
import Countdown from './../../components/Countdown';

const Home = () => {
  return (
    <div className="Home">
      <h1>Hello!</h1>
      <p className='message'>Hello my name is Fakepng. I am a high school student with a passion for coding.</p>
      <br />
      <Countdown countdownTimestampMs={1646365200000}/>
    </div>
  )
}

export default Home