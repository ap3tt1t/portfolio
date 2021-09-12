import { Link } from "react-router-dom"
import {PrimeIcons} from 'primereact/api'

const links = [
    {url: 'http://github.com', icon: PrimeIcons.GITHUB}
]

const Footer = () => {
    return (
        <div className='surface-section px-4 md:px-6 lg:px-8'>
            <div className='surface-section py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between'>
                <div>
                    <p className='capitalize'>Andrew Pettit</p>
                    <div className='mt-2 line-height-3'>© 2021 Andrew Pettit. All rights reserved</div>
                </div>
                <div className='mt-3 sm:mt-0'>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank noref" className={`cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700 ${index !== 0 && 'ml-2'}`}>
                            <i className={`${link.icon} text-xl`} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer