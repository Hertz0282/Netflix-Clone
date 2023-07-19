import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

  return (
      <div className={`nav ${show && "nav_black"}`}>
          {/* Navbar header */}
          <a href="/#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="nav_logo" />
          </a>
          
          <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png" alt="User_account" className="nav_avatar" />
    </div>
  )
}

export default Nav