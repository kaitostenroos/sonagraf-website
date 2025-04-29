import '../components/Post.css'

import articleImage from '../assets/sonagraf/images/blog/ryoko.jpg'
import extraImg1 from '../assets/sonagraf/images/blog/extra-images/UE-fukuoka.jpg'

function UnrealEngineMeetupFukuoka() {
    return(
        <div className="post-wrapper">
            <article className='post-text-wrapper'>
                <h1>Unreal Engine Meetup Fukuoka</h1>
                <p className='date'>9/16/24</p>
                <img src={articleImage} alt='Image of Ryoko, who will be the main character of my upcoming feature film Kinmokusei' />
                <p className='img-desc'>I showed my demo of modifying custom Metahuman MOCAP data inside Unreal Engine Sequencer. The character in the squencer is Ryoko, who will be the main character of my upcoming feature film Kinmokusei.</p>
                <p className='article-text'>
                    It was such an honor to be part of <a href="https://ue4fukuoka.connpass.com/event/328092/">Unreal Engine Meetup</a> in Fukuoka. I want to extend my thanks to the host 
                    <a href='https://x.com/isononatsumikan'>@natsumikan</a> Epic Games Japan, Studio DigitalPlus and the <a href="https://engineercafe.jp/en/">Engineer Cafe Fukuoka</a>.  
                    <br />
                    <br />
                    The energy in the room was heartfelt. 
                    <br />
                    <br />
                    I showed demos of several cinematic Unreal Engine techniques such as modifying MOCAP animations in Sequencer, rendering realistic environments such as Yoyogi Station.
                </p>
                <img src={extraImg1} alt="People wathing landscape material showing" />
                <p className='img-desc'>I showed modifying Landscape Material with Virtual Texturing. Thank you <a href="https://x.com/tempkinder">@スミオ</a> for the photographs!</p>
                <p className='article-text'>
                    After my piece, Mr.Shinoyama from Epic Games Japan held extensive piece introducing new tech in Unreal Engine. His demo was one of the most engaging  I have seen, everyone was sitting on edge of their seat!
                    <br />
                    <br />
                    We also got chance to see actual users projects and plans afterwards.
                    <br />
                    <br />
                    As a professional working in the industry, taking part of this kind of event is a must have experience every now and then. 
                    <br />
                    <br />
                    Working in remote in CG industry we often get this invisible feeling of isolation, like we are struggling alone in the dark.
                </p>
                <p className='author'>
                    Written by Jaakko Saari <br />
                    Founder of Sonagraf
                </p>
            </article>
        </div>
    );
}

export default UnrealEngineMeetupFukuoka