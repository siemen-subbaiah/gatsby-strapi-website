import React from "react"
import { data } from "../constants/footerlinks"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-items">
        {data.map(item => {
          return (
            <li key={item.id}>
              <a href={item.social}>{item.icon}</a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
