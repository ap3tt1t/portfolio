import {PrimeIcons} from 'primereact/api'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

const Map = () => {
    return (
        <>
            <div className='text-white text-2xl font-medium mb-6'>Contact Me</div>
            <div className='text-gray-300 line-height-3 mb-6'>
                <i className={`${PrimeIcons.MAP_MARKER} mr-2`} />
                <span><a className='no-underline text-white' target='_blank noref' href='https://goo.gl/maps/3KS7bkZZnGAvA8By6'>Stellenbosch, South Africa</a></span>
            </div>
            <ul className='list-none p-0 m-0 mt-6 text-white'>
                <li className='flex align-items-center mb-3'>
                    <i className={`${PrimeIcons.PHONE} mr-2`} />
                    <span><a className='no-underline text-white' target='_blank noref' href='tel:+27 71 435 7394'>+27 71 435 7394</a></span>
                </li>
                <li className='flex align-items-center mb-3'>
                    <span className='mr-2'><FiGithub /></span>
                    <span><a className='no-underline text-white' target='_blank noref' href='https://github.com/ap3tt1t'>ap3tt1t</a></span>
                </li>
                <li className='flex align-items-center mb-3'>
                    <span className='mr-2'><FiLinkedin /></span>
                    <span><a className='no-underline text-white' target='_blank noref' href='https://www.linkedin.com/in/andrew-pettit-a9b23428/'>Andrew Pettit</a></span>
                </li>
                <li className='flex align-items-center mb-3'>
                    <i className={`${PrimeIcons.ENVELOPE} mr-2`} />
                    <span><a className='no-underline text-white' target='_blank noref' href='mailto:andrew@pettit.co.za'>andrew@pettit.co.za</a></span>
                </li>
            </ul>
        </>
    )
}

export default Map