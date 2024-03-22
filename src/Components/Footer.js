import React from 'react';
import footerStyles from '../Style/Footer.module.css'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer() {
  return (
    <div>
       <footer className={footerStyles.footer}>
            <ul className={footerStyles.footerLinks}>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
            <div style={{cursor:"pointer"}}>
                 <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
            <p className={footerStyles.footerText}>
                © 2024 My Company. All rights reserved.
            </p>
        </footer>
    </div>
  )
}

export default Footer
