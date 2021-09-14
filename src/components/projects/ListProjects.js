// MODULES

// COMPONENTS
import Project from './Project'

// ASSETS
import LIGHTSARED from 'assets/projects/lightsared.PNG'
import DWRCPTCRM from 'assets/projects/dwrcpterp.PNG'
import USEROLES from 'assets/projects/useroles.PNG'

const projects = [
    {
        title: '#LightSARed Campaign',
        blurb: `"The South African events industry is dying, and we are being ignored" - a country wide campaign to highlight 
        the plight of the events industry in South Africa during the COVID-19 Pandemic`,
        link: 'https://www.lightsared.org.za',
        image: LIGHTSARED,
        stack: ['React', 'Node.JS', 'MonogDB', 'Express', 'Heroku']
    },
    {
        title: 'DWR Distribution Cape Town ERP',
        blurb: `Designed to fill the gap in the fact that the DWR Distribution Cape Town branch does not have access to the companies ERP system. This system 
        is able to keep track of all customers within the Cape Town and Western Cape Region, including contact details and addresses. Product information and pricing
        is also kept on the system with Excel import funcionality to allow speedy updating of multiple product prices at once. Quotes can be generated using products in the
        inventory and then converted to delivery notes for the customer to sign digitally upon recieving of their goods. PDF Printing of Quotes and Delivery Notes is also a feature.
        Administrators have the ability to see graphs of how sales are doing for any given month. `,
        link: undefined,
        image: DWRCPTCRM,
        stack: ['React', 'Node.JS', 'MongoDB', 'Express', 'Heroku', 'Netlify', 'GraphQL', 'Strapi', 'Authentication']
    },
    {
        title: 'NPM React Library - useRoles Hook',
        blurb: `
            This is a library that I wrote when I kept needing it over and over again on multiple projects. To save myself writing it again, I uploaded it to NPM for public use.
            The concept is to have a globally located Context State of a user's role, and any page, component or function can import the RoleChecker component and pass an array of roles it wants to allow
            access for. 
        `,
        link: 'https://www.npmjs.com/package/react-use-roles',
        image: USEROLES,
        stack: ['React', 'Javascript', 'React Hooks']
    }
]

const ListProjects = () => {
    return (
        <div className='grid grid-nogutter'>
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    )
}

export default ListProjects