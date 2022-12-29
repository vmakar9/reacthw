import {w3cwebsocket as W3CWebSocket } from "websocket";
import {useEffect, useState} from "react";

const url = 'ws://localhost:8080/chat'
const client = new W3CWebSocket(url)
function App() {

    let[msgs,setMessages]= useState([])

    useEffect(()=>  {
        client.onopen = (e)=> {
            console.log('connected to chat',e)
        };
        client.onmessage = (e)=> {
            console.log(e.data)
            msgs.push(e.data)
            setMessages([...msgs])
        }
    },[])


return <div>

    <form onSubmit={(e)=>  {
        e.preventDefault()
        let messagefound = e.target.message.value;
        console.log(messagefound)
        client.send(messagefound)

    }
    }>
    <input type={"text"} name={'message'}/>
    <button>send msg</button>
</form>

    {
        msgs.map(value =>  <div>{value}</div>)
    }
</div>

}

export default App;
