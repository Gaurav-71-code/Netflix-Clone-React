import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <img src="/assets/logo_1-removebg-preview.png" alt="Netflix Logo" className="logo" />
      <div>
        <select className="language-picker" name="language">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
        <button className="btn btn-lg">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar 