import { Card } from "primereact/card"
import { Rating } from 'primereact/rating';

const skills = [
    {description: "Git", rating: 4},
    {description: "VS Code", rating: 4},
    {description: "Project Management", rating: 5},
    {description: "Sales", rating: 4}
]

const Skills = () => (
    <div className='surface-card p-4 shadow-2 border-round'>
        <div className='grid grid-nogutter'>
            {skills.map(skill => <Skill key={skill.description} skill={skill} />)}
        </div>
    </div>
)

const Skill = ({skill}) => (
    <div className='col-6 md:col-3 lg:col-2 p-3 surface-card w-auto'>
        <Card title={skill.description}>
            <Rating value={skill.rating} readOnly disabled stars={5} cancel={false} />
        </Card>
    </div>
)

export default Skills