import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Seshadri S. All rights reserved.</p>
        <div className="social-links">
          {/* Replace # with actual links */}
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
