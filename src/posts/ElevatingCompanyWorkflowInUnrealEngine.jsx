import '../components/Post.css'
import articleImage from '../assets/sonagraf/images/blog/DSC05932-scaled.jpeg'

function ElevatingCompanyWorkflowInUnrealEngine() {
    return (
        <div className="post-wrapper">
            <article className='post-text-wrapper'>
                <h1>Elevating CG Company Workflow in Unreal Engine</h1>
                <p className='date'>7/2/24</p>
                <img src={articleImage} alt='Jaakko teaching his client' />
                <p className='article-text'>
                    On July I had pleasure of holding customized Unreal Engine training course for Digidelic in Tokyo.
                    <br />
                    <br />
                    During training session at Digidelic in Tokyo.
                    <br />
                    <br />
                    Digidelic is one of the leading Visual Production CG house in Japan with around 100 employees. Their slogan is “Move Emotion by Creativity”. Their wonderful works vary from  Live Graphics to Virtual Sets and VR and AR.
                    <br />
                    <br />
                    In the course we went through cutting edge features of Unreal Engine such as Substrate Materials, Nanite Meshes and Niagara particle systems. It was such a joy to see the high enthusiasm and innovation of the participants. Unreal Engine is so unique platform as it allows so fast iteration and creativity.
                    <br />
                    <br />
                    Every CG designer has their own strengths and passion for specific focuses. Companies, afterall, are just groups of people.
                    I aim to inspire and elevate everyone in our custom training courses.
                    <br />
                    <br />
                    We have also held training courses this year with major Japanese TV stations and broadcasters, specializing in elevating visuals used in ICVFX applications such as Vizrt.
                </p>
                <p className='author'>
                    Written by Jaakko Saari <br />
                    Founder of Sonagraf
                </p>
            </article>
        </div>


    )
}

export default ElevatingCompanyWorkflowInUnrealEngine