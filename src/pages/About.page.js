// COMPONENTS
import AboutMe from "components/about/AboutMe"
import Events from "components/about/Events"
import TechStack from "components/about/TechStack"

const About = () => {
    return (
        <div className='grid'>
            <div className='col-12 lg:col-6 p-5'>
                <AboutMe />
                <hr />
                <TechStack />
            </div>
            <div className='col-12 lg:col-6 p-5'>
                <Events />
            </div>
        </div>
    )
}

export default About