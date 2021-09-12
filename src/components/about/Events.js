import { Timeline } from 'primereact/timeline';
import { PrimeIcons } from 'primereact/api';
import {Card} from 'primereact/card'

const events = [
    {description: 'Born', icon: PrimeIcons.USER, date: '11/10/1993', text: 'Born in Cape Town'},
    {description: 'Matriculated', icon: PrimeIcons.BOOK, date: '04/12/2011', text: 'Matriculated with a Bachelors Pass'},
    {description: 'Javascript', icon: PrimeIcons.DESKTOP, date: '2019', text: 'Started learning the basics of Javascript'},
    {description: 'Node.JS and React', icon: PrimeIcons.STEP_FORWARD, date: '2020', text: 'Moved onto Node.JS and React, and chose to focus on React'},
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
        <div className='timeline-events'>
            <Timeline value={events} align='alternate' className='customized-timeline' marker={marker} content={content} />
        </div>
    )   
}

export default Events