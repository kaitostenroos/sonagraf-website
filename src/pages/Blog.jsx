import { Link } from "react-router"

import './Blog.css'

import  exampleImage from'../assets/example-image.jpg'
function Blog() {
    return(
        <div className="blog-wrapper">
            <h1>News</h1>
            <div className="blog-entry-wrapper">
                <Link to={"test-post"} className="blog-entry">
                    <img src={exampleImage} />
                    <p className="date">1/12/2025</p>
                    <p>Example Post</p>
                </Link>
                <Link to={"test-post"} className="blog-entry">
                    <img src={exampleImage} />
                    <p className="date">1/12/2025</p>
                    <p>Example Post</p>
                </Link>
                <Link to={"test-post"} className="blog-entry">
                    <img src={exampleImage} />
                    <p className="date">1/12/2025</p>
                    <p>Example Post</p>
                </Link>
                <Link to={"test-post"} className="blog-entry">
                    <img src={exampleImage} />
                    <p className="date">1/12/2025</p>
                    <p>Example Post</p>
                </Link>
            </div>
            
        </div>
    )
}
export default Blog