import techstack from 'assets/techstack.json'

const TechStack = () => {
    return (
        <div className='grid grid-nogutter'>
            {techstack.map(tech => <Tech key={tech.name} tech={tech} />)}
        </div>
    )
}

const Tech = ({tech}) => (
    <div className='col-6 md:col-4 xl:col-3 p-3'>
        <div className='surface-card shadow-2 border-rounded p-3'>
            <div className='flex flex-column align-items-center'>
                <span className='text-lg text-900 mb-2'>{tech.name}</span>
                <img src={tech.logo} width="100%" alt={tech.name} />
            </div>
        </div>
    </div>
)

export default TechStack