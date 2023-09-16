import { useCallback, useState } from "react";
// @ts-ignore
import { useStream } from 'react-fetch-streams';


const url = 'https://api.fixie.ai/api/v1/agents/swards/currency_guru/conversations'

export const useCurrencyGuru = () => {
  const [data, setData] = useState({});
  const onNext = useCallback(async (res: { json: () => { } }) => {
    const data = await res.json();
    setData(data);
  }, [setData]);
  useStream('http://myserver.io/stream', {onNext});

  const [chatHistory, setChatHistory] = useState<string[]>([])
  const lastMessage = chatHistory[0]

  const postMessage = (s: string) => {

  }

  return { lastMessage, postMessage }
}