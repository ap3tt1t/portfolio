
import { useHistory } from 'react-router-dom'
import {Toolbar} from 'primereact/toolbar'
import { Menubar } from 'primereact/menubar';

const Navbar = () => {
    const history = useHistory()
    const model = [
        { label: '<Home />', command: () => history.push('/')},
        { label: '<About />', command: () => history.push('/about') },
        { label: '<Projects />', command: () => history.push('/projects') },
        { label: '<Contact />', command: () => history.push('/contact') },
    ]
    return (
        <div className='pb-3'>
            {/* <Toolbar left={NavbarTitle} right={<TabMenu model={model} style={{backgroundColor: '#f8f9fa'}}/>} className='border-0 surface-overlay py-3 px-3 shadow-2' /> */}
            <Menubar model={model} start={NavbarTitle} />
        </div>
    )
}

export default Navbar

const NavbarTitle = () => (<span className='capitalize text-2xl mx-3'>{`<AndrewPettit />`}</span>)

