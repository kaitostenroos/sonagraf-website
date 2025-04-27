import { Link } from "react-router"

import './Blog.css'

import  exampleImage from'../assets/example-image.jpg'
function Blog() {
    return(
        <div className="blog-wrapper">
            <h1>News</h1>
            <Link to={"test-post"} className="blog-entry">
                <img src={exampleImage} />
                <p>Example Post</p>
            </Link>
            <Link to={"test-post"} className="blog-entry">
                <img src={exampleImage} />
                <p>Example Post</p>
            </Link>
            <Link to={"test-post"} className="blog-entry">
                <img src={exampleImage} />
                <p>Example Post</p>
            </Link>
            <Link to={"test-post"} className="blog-entry">
                <img src={exampleImage} />
                <p>Example Post</p>
            </Link>
        </div>
    )
}
export default Blog