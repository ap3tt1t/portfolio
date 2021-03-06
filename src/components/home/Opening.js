import Links from './Links'

const Opening = () => (
    <div className='col-12 lg:col-6 p-1 lg:p-3' style={{height: '320px'}}>
        <div className='surface-card p-4 shadow-2 border-round h-full'>
            <div className='text-5xl my-1'>Andrew Pettit</div>
            <div className='text-3xl my-1'>Online Portfolio</div>
            <div className='text-lg my-1'>
                Frontend-Heavy Full Stack Developer
            </div>
            <div className='text-sm my-1'>Specialising in React and Node.js</div>
            <div className='grid grid-nogutter surface-section my-3'>
                <Links />
            </div>
        </div>
    </div>
)

export default Opening