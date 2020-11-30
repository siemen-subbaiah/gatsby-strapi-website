import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { data } from "../constants/navlinks"

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <nav>
      <div className="logo">
        <h1>
          <Link className="links" to="/">
            Logo
          </Link>
          <GiHamburgerMenu
            className="ham-icon"
            onClick={() => setToggle(!toggle)}
          />
        </h1>
      </div>
      <ul className={`${toggle ? `nav-items` : `nav-items ul-show`}`}>
        {data.map(item => {
          return (
            <li key={item.id}>
              <Link className="links" to={item.to}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
