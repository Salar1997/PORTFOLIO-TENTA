import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Alla artiklar
        </Link>
      )}
    </section>
  )
}
export default Blogs