// MODULES
import {lazy} from 'react'
// ASSETS
import MapImage from 'assets/map.jpg'
// COMPONENTS
const Map = lazy(() => import('components/contact/Map'))
const Form = lazy(() => import('components/contact/Form'))

const Contact = () => {
    return (
        <div className='grid grid-nogutter mb-6'>
            <div className='col-12 md:col-6 bg-no-repeat bg-cover p-8' style={{backgroundImage: `url("${MapImage}")`}}>
                <Map />
            </div>
            <div className='col-12 md:col-6'>
                <Form />
            </div>
        </div>
    )
}

export default Contact