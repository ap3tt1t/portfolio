import {PrimeIcons} from 'primereact/api'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const model = [
        {label: '<Home />', icon: PrimeIcons.HOME, path: '/'},
        {label: '<About />', icon: PrimeIcons.INFO, path: '/about'},
        {label: '<Projects />', icon: PrimeIcons.FOLDER, path: '/projects'},
        {label: '<Contact />', icon: PrimeIcons.PHONE, path: '/contact'},
    ]
    return (
        <div className='pb-3'>
            <div className='surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static'>
                <div className='align-items-between flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none'>
                    <span className='capitalize text-2xl mx-3'>{`<AndrewPettit />`}</span>
                    <div>
                    <ul className='list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row text-lg'>
                        {model.map(link => (
                            <li key={link.label} className=''>
                                <NavLink to={link.path} className='no-underline flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                                    {/* <i className={`mr-2 ${link.icon}`} /> */}
                                    <span>{link.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar