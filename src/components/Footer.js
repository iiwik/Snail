import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='title'>
            <span>Get in touch</span>

            <button className='button'>
                Contact Us
            </button>

            <div className="links">
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
            <ul>
                <li>Terms of Us</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
            </ul>
            <ul>
                <li>Feedback</li>
                <li>Services</li>
                <li>Products</li>
            </ul>
            </div>
        </div>

    </footer>
  )
}
