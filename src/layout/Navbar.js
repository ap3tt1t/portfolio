
import { useHistory, Link } from 'react-router-dom'
import { Menubar } from 'primereact/menubar';

const Navbar = () => {
    const history = useHistory()
    const model = [
        { label: 'About', command: () => history.push('/about') },
        { label: 'Projects', command: () => history.push('/projects') },
        { label: 'Contact', command: () => history.push('/contact') },
    ]
    return (
        <div className='pb-3'>
            <Menubar model={model} start={NavbarTitle} />
        </div>
    )
}

export default Navbar

const NavbarTitle = () => (<Link to='/' className='no-underline text-900'><span className='capitalize text-2xl mx-3'>{`Andrew Pettit`}</span></Link>)

