// COMPONENTS
import AboutMe from "components/about/AboutMe"
import Events from "components/about/Events"
import TechStack from "components/about/TechStack"

const About = () => {
    return (
        <div className='grid'>
            <div className='col-12 lg:col-6 p-5'>
                <h3 className='text-center'>About me</h3>
                <AboutMe />
                <hr />
                <h2 className='text-center'>Tech Stack</h2>
                <TechStack />
            </div>
            <div className='col-12 lg:col-6 p-5'>
                <Events />
            </div>
        </div>
    )
}

export default About