import { Link } from 'react-router-dom'

// ASSETS
import HomeLeft from 'assets/homeleft.jpg'
// RENDER
const Home = () => {
    return (
        <div className="grid grid-nogutter surface-section text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">React Developer</span>
                    <div className="text-6xl text-primary font-bold mb-3">Passionate about code</div>
                    <p className="mt-0 mb-4 text-700 line-height-3"></p>
                    <Link to='/about' className='mr-3 p-button p-button-raised no-underline'>
                        <span className='p-button-label p-c'>Learn more</span>
                    </Link>
                    <Link to='/contact' className='mr-3 p-button p-button-outlined no-underline'>
                        <span className='p-button-label p-c'>Contact me</span>
                    </Link>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={HomeLeft} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    )
}

export default Home