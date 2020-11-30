import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"
import { FiFacebook } from "react-icons/fi"

export const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon" />,
    social: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <FiTwitter className="social-icon" />,
    social: "https://twitter.com/",
  },
  {
    id: 3,
    icon: <AiOutlineYoutube className="social-icon" />,
    social: "http://youtube.com/",
  },
  {
    id: 4,
    icon: <FiFacebook className="social-icon" />,
    social: "https://www.facebook.com/",
  },
]
