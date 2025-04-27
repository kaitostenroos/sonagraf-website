import '../components/Post.css'
import exampleImage from '../assets/example-image.jpg'

function TestPost() {
    return(
        <div className="post-wrapper">
            <div className='post-text-wrapper'>
                <h1>Test Post Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vitae consequuntur ullam dolorum dolore enim quo earum accusamus. Dignissimos quae voluptatibus recusandae, quisquam ea placeat enim libero reiciendis deserunt ullam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum expedita distinctio. Vitae repellat necessitatibus illo? Culpa, officiis, quos est id enim nihil amet omnis modi repellat, tempora porro accusantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eum in sit rem pariatur necessitatibus, ut maxime minus architecto iure voluptate adipisci voluptatum laboriosam itaque magni voluptatibus fugiat non sapiente!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta debitis aspernatur nesciunt alias numquam et fugit illum laudantium eos nobis, tenetur cumque vitae doloremque quae dolorum libero earum inventore sapiente!
                </p>
                <img src={exampleImage} alt='Image of a coastline with a palm tree'/>
            </div>
        </div>
        
        
    )
}

export default TestPost