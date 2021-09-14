import { Chip } from 'primereact/chip';
import { Card } from 'primereact/card';

const Project = ({project}) => {
    const footer = (
        <div className='p-button p-componet'>
            <span className='p-button-label p-c'><a style={{position: 'relative', bottom: '0'}} href={project.link} className='no-underline text-white' target='_blank no-rel'>Visit</a></span>
        </div>
    )
    return (
        <div className='col-11 mb-3 mx-auto'>
            <div className='surface-card shadow-2 border-rounded p-3'>
                <div className='grid nogutter'>
                    <div className='col-12 lg:col-6'>
                        <img src={project.image} alt={project.title} width="100%" />
                    </div>
                    <div className='col-12 lg:col-6 l-1'>
                        <Card title={project.title} subTitle={project.blurb} style={{height: '100%'}} footer={footer}>
                            {project.stack.map(tech => <Chip label={tech} className='mr-2 mb-2' />)}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project