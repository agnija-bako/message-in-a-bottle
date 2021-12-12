import React, { useEffect, useState } from 'react'


function Message() {

    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    useEffect(()=>
    {
        fetch("https://localhost:44342/api/message").then(res => res.json().then(data => setMessage(data)))
    }, [])
    
     
        return (
            <div>
                <h1> {message.Title} </h1>
                <p> {message.Body} </p>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}> Increase </button>
            </div>
        )
    
}

export default Message
