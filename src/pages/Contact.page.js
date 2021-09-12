import MapImage from 'assets/map.jpg'

const Contact = () => {
    return (
        <div className='grid grid-nogutter'>
            <div className='col-12 md:col-6 bg-no-repeat bg-cover p-8' style={{backgroundImage: `url("${MapImage}");`}}>
                <p>Map</p>
            </div>
        </div>
    )
}

export default Contact