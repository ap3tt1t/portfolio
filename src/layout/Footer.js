import {PrimeIcons} from 'primereact/api'
// ASSETS
import {FiGithub, FiLinkedin} from 'react-icons/fi'

const links = [
    {url: 'http://github.com/ap3tt1t', Icon: FiGithub},
    {url: 'https://www.linkedin.com/in/andrew-pettit-a9b23428/', Icon: FiLinkedin}
]

const Footer = () => {
    return (
        <div className='surface-200 border-round-top px-6 text-800'>
            <div className='py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between'>
                <div className='text-sm'>
                    <p className='capitalize'>Andrew Pettit</p>
                    <div className='mt-2 line-height-3'>© 2021 Andrew Pettit. All rights reserved</div>
                </div>
                <div className='mt-3 sm:mt-0 text-2xl'>
                    {links.map(({url, Icon}, index) => (
                        <a key={index} href={url} target="_blank noref" className={`cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700 ${index !== 0 && 'ml-2'}`}>
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer