import { useEffect, useState } from "react";

import './LatestNews.css'

function LatestNews() {

    const maxPosts = 3;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.sonagraf.com%2Ffeed')
                const data = await response.json();
                setPosts(data.items)
                console.log(data.items)
            } catch (error) {
                console.log("Fething RSS failed: ", error)
            }

        }

        fetchPosts()
    }, []);

    return (
        <div className="post-container">
            <h2 className="post-container-title">Latest Posts:</h2>
            {posts.slice(0, maxPosts).map((post, index) => (
                <a href={post.link} key={index} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.description.slice(0, -4)}</p>
                    <small>{post.pubDate.slice(0, 10)}</small>
                </a>
            ))}
        </div>
    );

};

export default LatestNews