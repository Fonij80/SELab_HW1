import React from 'react';
// import './Footer.css'; // فایل CSS برای استایل‌ها


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>
                            All About Learning Java Script
                        </p>
                    </div>
                    <div className="footer-section links">
                        <h2>Useful Links</h2>
                        <ul>
                            <li><a>Home Page</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Get In Touch</a></li>
                            <li><a>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2>Get In Touch</h2>
                        <p>Email: info@example.com</p>
                        <p>Phone: 123456789</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy;All Right Reserved | 2024
                </div>
            </div>
        </footer>
    );
}

export default Footer;
