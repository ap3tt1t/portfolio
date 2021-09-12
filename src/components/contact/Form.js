import {useState} from 'react'
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'
import {Button} from 'primereact/button'
import { PrimeIcons } from 'primereact/api'

const Form = () => {
    // STATE
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    // FUNCTIONS
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Sending Email')
    }
    // RENDER
    return (
        <div>
            <form onSubmit={handleSubmit} className='p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8'>
                <div className='field col-12 lg:col-6 p-float-label mb-4'>
                    <InputText placeholder='First Name' className='py-3 px-2 text-lg' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className='field col-12 lg:col-6 p-float-label mb-4'>
                    <InputText placeholder='Surname Name' className='py-3 px-2 text-lg' value={surname} onChange={e => setSurname(e.target.value)} />
                </div>
                <div className='field col-12 mb-4'>
                    <InputText type='email' placeholder='Email' className='py-3 px-2 text-lg' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='field col-12 mb-4'>
                    <InputText type='text' placeholder='Phone' className='py-3 px-2 text-lg' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className='field col-12 mb-4'>
                    <InputTextarea placeholder='Message' className='py-3 px-2 text-lg' rows={3} style={{overflow: "hidden", height: "95px"}} autoResize={true} value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <div className='col-12 text-right'>
                    <Button className='px-5 py-3 w-auto' type='submit' icon={PrimeIcons.ENVELOPE} label='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Form