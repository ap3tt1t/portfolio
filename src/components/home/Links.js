import {Link} from 'react-router-dom'

// ASSETS
import {FiGithub, FiLinkedin} from 'react-icons/fi'

const Links = () => (
    <>
        <div className='col-6 lg:col-1 p-1 lg:p-2 surface-card shadow-2 border-round text-center'><Link to='/about' className='no-underline text-900'>Information</Link></div>
        <div className='col-6 lg:col-1 p-1 lg:p-2 surface-card shadow-2 border-round text-center'><Link to='/projects' className='no-underline text-900'>Portfolio</Link></div>
        <div className='col-6 lg:col-1 p-1 lg:p-2 surface-card shadow-2 border-round text-center'><Link to='/contact' className='no-underline text-900'>Contact</Link></div>
        <div className='col-6 lg:col-1 p-1 lg:p-2 surface-card shadow-2 border-round text-center'><a href='https://github.com/ap3tt1t' target='_blank no-rel' className='no-underline text-900'><FiGithub /></a></div>
        <div className='col-6 lg:col-1 p-1 lg:p-2 surface-card shadow-2 border-round text-center'><a href='https://www.linkedin.com/in/andrew-pettit-a9b23428/' target='_blank no-rel' className='no-underline text-900'><FiLinkedin /></a></div>
    </>
)

export default Links