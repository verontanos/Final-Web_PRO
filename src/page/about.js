import React from 'react'
import Navigation from '../components/nav'

function About() {
    return (
        <>
          <Navigation/>
          <div className="container my-5">
            <h1>About this Application</h1>
            <p>Tanos, Veron, 105011910104, Sistem Informasi</p>
          </div>
          <Footer/>  
        </>
    )
}

export default About