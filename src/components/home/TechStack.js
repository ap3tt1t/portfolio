// MODULES
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';

// ASSETS
import techstack from 'assets/techstack.json'

const TechStack = () => {
    return (
        <div className='grid grid-nogutter'>
            {techstack.map(tech => <Tech key={tech.name} tech={tech} />)}
        </div>
    )
}

const Tech = ({tech}) => {
    const header = <img src={tech.logo} alt={tech.name} />
    return (
        <div className='col-4 md:col-3 lg:col-2 xl:col-1 p-3 surface-card w-auto mx-auto'>
            <Card title={tech?.name} header={header}>
                <Rating value={tech.rating} readOnly disabled stars={5} cancel={false} />
            </Card>
        </div>
    )
}

export default TechStack