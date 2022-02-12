import React from 'react'
import './Education.css'
import EduList from './../../Config/EduList'

const Education = () => {
  const educationList = EduList.map(edu => {
    return (
      <div className="education-container" key={edu.id}>
        <img className='image' src={edu.image} />
        <p className='level'>{edu.level}</p>
        <p className='name'>{edu.name}</p>
        <p className='sec'>{edu.sec}</p>
        <p className='grade'>Grade: {edu.grade} | {edu.year}</p>
        <p className='gpa'>GPA: {edu.gpa}</p>
      </div>
    )
  })


  return (
    <div className="Education">
      <h1>Education</h1>
      {educationList}
    </div>
  )
}

export default Education