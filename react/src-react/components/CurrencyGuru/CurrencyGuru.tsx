import { useCurrencyGuru, FixieResponse } from "../../hooks/useCurrencyGuru";
import {useState} from "react";

export const CurrencyGuru = () => {
  const { postMessage, data } = useCurrencyGuru();
  const [ newMessage, setNewMessage ] = useState<string>('')

  const handlePostMessage = () => {
    postMessage(newMessage)
  }

  return (
    <div className='guru'>
      { data?.turns.map((t) => <div>{ t.id }</div>) }
      <input type={'text'} onChange={e => setNewMessage(e.target.value)} /><button onClick={handlePostMessage}>Post</button>
    </div>
  )
}