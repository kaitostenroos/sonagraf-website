import '../components/Post.css'
import articleImage from '../assets/sonagraf/images/blog/jaakko-saari-launch01.jpg'

function NewHorizons() {
    return(
        <div className="post-wrapper">
            <article className='post-text-wrapper'>
                <h1>Elevating CG Company Workflow in Unreal Engine</h1>
                <p className='date'>8/31/24</p>
                <img src={articleImage} alt='Jaakko teaching his client' />
                <p className='article-text'>
                    August 31 marked the end of a period in my life. SonaGraf Co., Ltd. (kabusikigaisha) is officially dissolved.
                    <br />
                    <br />
                    I would like to extend my sincere thanks for every party involved, especially help of kind staff at Venture Support and staff at DigitalScape, Born Digital, Photron, Digidelic and Nikon Creates.  
                    <br />
                    <br />
                    SonaGraf will continue as one person company from September and I will continue to answer the calls and requests from our clients. I have also overseen several motion capture projects as well, recently using mocopi motion capture. This is much more portable system than Rokoko suit my company used before.  
                    <br />
                    <br />
                    September, I will also start working as Project Associate Professor at Digital Hollywood University in Tokyo. It is privilege to be able to share what I have learned during decades of working in the CG industry and I am really looking forward this.
                    <br />
                    <br />
                    I think life is like a rocket ship. Once we launch we use our boosters, first ones being our parents love which lifts us the first few kilometers. Little by little we use the stages and service modules in our rockets, reducing the weight. At last only the most important part, command module remains as we reach space.
                    <br />
                    <br />
                    I am really thankful for everyone who I have met in this wonderful journey.
                    <br />
                    <br />
                    Let’s make cool works together!
                </p>
                <p className='author'>
                    Written by Jaakko Saari <br />
                    Founder of Sonagraf
                </p>
            </article>
        </div>
    );
}

export default NewHorizons