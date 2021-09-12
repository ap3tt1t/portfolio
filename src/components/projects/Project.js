const Project = ({project}) => {
    return (
        <div className='col-12 md:col-6 xl:col-4 p-3'>
            <div className='surface-card shadow-2 border-rounded p-3'>
                <div className='flex flex-column align-items-center border-bottom-1 surface-border pb-3'>
                    <img src={project.image} alt={project.name} width='100%' className='mb-3'/>
                    <span className='text-lg text-900 font-medium mb-2'>{project.name}</span>
                    <span className='text-600 font-medium mb-2'>
                        {project.stack.join(', ')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Project