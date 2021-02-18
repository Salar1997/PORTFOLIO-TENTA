import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Hem",
    url: "/",
  },
  {
    id: 2,
    text: "Mitt CV",
    url: "/about/",
  },
  {
    id: 3,
    text: "Projekt",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Kontakt",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
