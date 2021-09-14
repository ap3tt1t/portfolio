// COMPONENTS
import AboutMe from "components/about/AboutMe"
import Events from "components/about/Events"
import Skills from "components/about/Skills"

const About = () => {
    return (
        <div className='grid'>
            <div className='col-12'>
                <h3 className='text-center'>About me</h3>       
            </div>
            <div className='col-12 lg:col-8 mx-auto mb-3'>
                <AboutMe />
            </div>
            <div className='col-12 lg:col-8 mx-auto'>
                <Events />
            </div>
            <div className='col-12 lg:col-8 mx-auto'>
                <Skills />
            </div>
        </div>
    )
}

export default About