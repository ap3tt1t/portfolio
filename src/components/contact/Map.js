import {PrimeIcons} from 'primereact/api'

const Map = () => {
    return (
        <>
            <div className='text-white text-2xl font-medium mb-6'>Contact Me</div>
            <div className='text-gray-300 line-height-3 mb-6'>Get hold of me to ask me anything more</div>
            <ul className='list-none p-0 m-0 mt-6 text-white'>
                <li className='flex align-items-center mb-3'>
                    <i className={`${PrimeIcons.PHONE} mr-2`} />
                    <span><a className='no-underline text-white' target='_blank noref' href='tel:+27 71 435 7394'>+27 71 435 7394</a></span>
                </li>
                <li className='flex align-items-center mb-3'>
                    <i className={`${PrimeIcons.GITHUB} m-2`} />
                    <span><a className='no-underline text-white' target='_blank noref' href='https://github.com/ap3tt1t'>ap3tt1t</a></span>
                </li>
                <li className='flex align-items-center mb-3'>
                    <i className={`${PrimeIcons.ENVELOPE} m-2`} />
                    <span><a className='no-underline text-white' target='_blank noref' href='mailto:andrew@pettit.co.za'>andrew@pettit.co.za</a></span>
                </li>
            </ul>
        </>
    )
}

export default Map