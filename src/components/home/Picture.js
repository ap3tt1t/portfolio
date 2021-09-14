// ASSETS
import PersonalImage from 'assets/personal.jpg'

const Picture = () => (
    <div className='col-12 lg:col-6 p-1 lg:p-3'>
        <div className='surface-card p-4 shadow-2 border-round flex justify-content-center'>
            <img src={PersonalImage} className='border-circle' height='300px' />
        </div>
    </div>
)

export default Picture