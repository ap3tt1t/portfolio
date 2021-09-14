// COMPONENTS
import Opening from 'components/home/Opening'
import Picture from 'components/home/Picture'
import Links from 'components/home/Links'
import Intro from 'components/home/Intro'
import TechStack from 'components/home/TechStack'
import Email from 'components/home/Email'
// RENDER
const Home = () => {
    return (
        <div className='lg:m-8'>
            <div className="grid grid-nogutter surface-section text-800 m-3">
                <Opening />
                <Picture />
            </div>
            <div className='grid grid-nogutter surface-section m-3 p-3'>
                <Links />
            </div>
            <div className='grid grid-nogutter surface-section m-3 p-3'>
                <Intro />
            </div>
            <div className='surface-section m-3 p-3'>
                <TechStack />
            </div>
            <div className='surface-section m-3 p-3'>
                <Email />
            </div>
        </div>
    )
}

export default Home