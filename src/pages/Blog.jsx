import { Link } from "react-router";
import LazyImage from '../components/LazyImage';
import './Blog.css';

import elevatingCGCompany from '../assets/sonagraf/images/DSC05932-scaled.jpeg';

function Blog() {
    return(
        <div className="blog-wrapper">
            <h1>News</h1>
            <div className="blog-entry-wrapper">
                <Link to={"ElevatingCompanyWorkflow"} className="blog-entry">
                    <LazyImage src={elevatingCGCompany} alt="Elevating CG Company Workflow" />
                    <p className="date">7/2/24</p>
                    <p>Elevating CG Company Workflow in Unreal Engine</p>
                </Link>
            </div>
        </div>
    )
}

export default Blog;