import { Link } from "react-router";
import LazyImage from '../components/LazyImage';
import './Blog.css';

import elevatingCGCompany from '../assets/sonagraf/images/blog/DSC05932-scaled.jpeg';
import newHorizons from '../assets/sonagraf/images/blog/jaakko-saari-launch01.jpg'
import UnrealEngineMeetupFukuoka from '../assets/sonagraf/images/blog/ryoko.jpg'

function Blog() {
    return(
        <div className="blog-wrapper">
            <h1>News</h1>
            <div className="blog-entry-wrapper">
                <Link to={"unreal-engine-meetup-fukuoka"} className="blog-entry">
                    <LazyImage src={UnrealEngineMeetupFukuoka} alt="Elevating CG Company Workflow" />
                    <p className="date">7/2/24</p>
                    <p>Unreal Engine Meetup Fukuoka</p>
                </Link>
                <Link to={"new-horizons"} className="blog-entry">
                    <LazyImage src={newHorizons} alt="Spaceship flying over a forest" />
                    <p className="date">8/31/24</p>
                    <p>Elevating CG Company Workflow in Unreal Engine</p>
                </Link>
                <Link to={"elevating-company-workflow-in-unreal-engine"} className="blog-entry">
                    <LazyImage src={elevatingCGCompany} alt="Jaakko teaching his client" />
                    <p className="date">7/2/24</p>
                    <p>Elevating CG Company Workflow in Unreal Engine</p>
                </Link>
            </div>
        </div>
    )
}

export default Blog;