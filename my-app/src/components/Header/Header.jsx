import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className="jobHeader">
    <header className="header">
      <h1 className='title'>Welcome to JobDekho.com</h1>
      <p>A platform to find your dream job</p>
    </header>
    <section className="job-features">
      <h2>Features of JobSite</h2>
      <ul>
        <li>Search and browse thousands of job listings</li>
        <li>Create a professional profile to showcase your skills and experience</li>
        <li>Apply to jobs directly through the platform</li>
        <li>Receive personalized job recommendations based on your profile</li>
        <li>Connect with employers and recruiters</li>
        <li>Get notifications about new job openings</li>
      </ul>
    </section>
  </div>
  )
}
