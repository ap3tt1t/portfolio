import { Timeline } from 'primereact/timeline';
import { PrimeIcons } from 'primereact/api';
import {Card} from 'primereact/card'

const events = [
    {description: 'Born', icon: PrimeIcons.USER, date: '11/10/1993', text: 'Born in Cape Town, South Africa'},
    {description: 'Matriculated', icon: PrimeIcons.BOOK, date: '04/12/2011', text: 'Matriculated with a Bachelors Pass from Bishops Diocesan College'},
    {description: 'Started Working', icon: PrimeIcons.BOOK, date: '01/03/2015', text: 'Started my professional career in the events industry as a Sound Engineer.'},
    {description: 'Javascript', icon: PrimeIcons.DESKTOP, date: '2019', text: 'Started learning the basics of Javascript. Built various starter applications, and covered the topic of ES6 practices: array mapping and destructuring, arrow functions and template strings.'},
    {description: 'Moved into Sales', icon: PrimeIcons.BOOK, date: '14/02/2020', text: 'Moved from working on Events into Sales and Distribution of Audio Visual Equipment'},
    {description: 'Node.JS and React', icon: PrimeIcons.STEP_FORWARD, date: '2020', text: 'Continued developing my coding skills by learning Node.JS and React. Built a website for a NPO, as well as an ERP for my current company. Learnt great React features such as State and Context Hooks, Array Mapping and Lazy Loading.'},
]

const Events = () => {
    const content = item => (
        <Card title={item.description} subTitle={item.date}>
            <p>{item.text}</p>
        </Card>
    )
    const marker = item => (
        <span className='custom-marker shadow-2' style={{backgroundColor: 'var(--blue-500)'}}>
            <i className={item.icon} />
        </span>
    )
    return (
        <div className='timeline-events surface-card p-4 shadow-2 border-round'>
            <Timeline value={events} align='alternate' className='customized-timeline' marker={marker} content={content} />
        </div>
    )   
}

export default Events