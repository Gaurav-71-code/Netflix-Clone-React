import React from 'react'

function Footer() {
  const links = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Notices',
    'Only on Netflix'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="links">
          {links.map((link) => (
            <a href="#">{link}</a>
          ))}
        </div>
        <select className="language-picker" name="language">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
        <p>Netflix India</p>
      </div>
    </footer>
  )
}

export default Footer 