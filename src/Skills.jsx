import React from 'react'
import './App.css'

const Skills = () => {
  return (
    <div className='skill '>
       <h1 className='col head'><b>SKILLS </b></h1>
    <p className='para'>Iam a skilled and passionate web developer with experience in creating user friendly websites.I have a  strong understanding of developing application and a keen eye for detail.Iam proficient in HTML,CSS and JavaScript </p>
      <div className=' container ' >
 <div class="row justify-content-evenly">
    <div class="column col-4">
    <div className='front '>
     <h1 className='fr'><b>FRONTEND</b></h1>
    <p>HTML <br/>
      CSS <br/> JavaScript <br/> REACT</p>
    </div>
    </div>
    <div class="column col-4 ">
    <div className='back'>
      <h1 className='fr'><b>BACKEND</b></h1>
      <p >EXPRESS <br/> MongoDB <br/>nodJS </p>
    </div>
    </div>
  </div>
</div>
     
    </div>
  )
}

export default Skills
