import { useCallback, useState } from "react";
// @ts-ignore
import { useStream } from 'react-fetch-streams';

export type FixieResponse = {id: string,
  "turns": [
    {"id": string,
      "timestamp": string,
      "role": "user",
      "messages": [
        {
          "kind": string,
          "content": string
        }
      ], "generationParams": null, "state": "done"},
    {
      "id": string,
      "timestamp": string,
      "role": "assistant",
      "messages": [
        {
          "kind": "text",
          "content": string
        }
      ]}]}

const url = 'https://api.fixie.ai/api/v1/agents/swards/currency_guru/conversations'

export const useCurrencyGuru = () => {
  const [data, setData] = useState<FixieResponse | undefined>();

  const onNext = useCallback(async (res: { json: () => FixieResponse }) => {
    const data = await res.json();
    setData(data);
  }, [setData]);
  useStream('http://myserver.io/stream', {onNext});

  return { data, postMessage }
}