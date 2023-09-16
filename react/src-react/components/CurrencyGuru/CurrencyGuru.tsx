import { useCurrencyGuru, Message } from "../../hooks/useCurrencyGuru";

export const CurrencyGuru = () => {
  const { postMessage, chatHistory } = useCurrencyGuru();

  return (
    <div className='guru'>
      { chatHistory.map((m: Message) => <div>{ m.author }</div>)}
    </div>
  )
}