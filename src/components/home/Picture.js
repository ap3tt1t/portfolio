// ASSETS
import PersonalImage from 'assets/personal.jpg'

const Picture = () => (
    <div className='col-12 lg:col-6 p-1 lg:p-3' style={{height: '320px'}}>
        <div className='surface-card p-4 shadow-2 border-round flex align-items-center justify-content-center h-full'>
            <img src={PersonalImage} className='border-circle' height='200px' alt="Andrew Pettit" />
        </div>
    </div>
)

export default Picture