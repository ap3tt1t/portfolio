// COMPONENTS
import AboutMe from "components/about/AboutMe"
import Events from "components/about/Events"

const About = () => {
    return (
        <div className='grid'>
            <div className='col-12 lg:col-6 p-5'>
                <AboutMe />
            </div>
            <div className='col-12 lg:col-6 p-5'>
                <Events />
            </div>
        </div>
    )
}

export default About