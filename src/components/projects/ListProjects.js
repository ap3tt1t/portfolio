// MODULES

// COMPONENTS
import Project from './Project'

// ASSETS
import LIGHTSARED from 'assets/lightsared.png'
import DWRCPTCRM from 'assets/dwrcptcrm.png'
import USEROLES from 'assets/useroles.png'

const projects = [
    {
        name: 'LightSARed Campaign',
        link: 'https://www.lightsared.org.za',
        image: LIGHTSARED,
        stack: ['React', 'Node.JS', 'MonogDB', 'Express', 'Heroku']
    },
    {
        name: 'DWR Distribution Cape Town CRM',
        link: '',
        image: DWRCPTCRM,
        stack: ['React', 'Node.JS', 'MongoDB', 'Express', 'Heroku', 'Netlify', 'GraphQL']
    },
    {
        name: 'NPM React Library - useRoles Hook',
        link: 'https://www.npmjs.com/package/react-use-roles',
        image: USEROLES,
        stack: ['React', 'Javascript', 'React Hooks']
    },
]

const ListProjects = () => {
    return (
        <div className='grid grid-nogutter'>
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    )
}

export default ListProjects