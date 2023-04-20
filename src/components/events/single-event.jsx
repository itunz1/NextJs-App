import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

function SingleEvent({ data }) {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!emailValue.match(validRegex)){
            setMessage('Please introduce a correct email address')
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailValue, eventId})
            });
            if(!response.ok) throw new Error(`Error: ${response.status}`)
            const data = await response.json();
            setMessage(data.message)
            inputEmail.current.value = '';

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className=''>
            <h1>{data.title}</h1>
            <Image src={data.image} alt={data.title} width={200} height={200} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit}>
            <label className='flex'>Get Registered for this event!</label>
            <input className='h-[40px] min-w-[350px]' ref={inputEmail} type='email' id='email' placeholder='please insert your email here'/> 
            <button className='border-[5px] h-[40px]  min-w-[150px] ml-5 uppercase' type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent