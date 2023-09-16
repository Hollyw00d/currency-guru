import { useCallback, useState } from 'react';
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


const url =
  'https://api.fixie.ai/api/v1/agents/swards/currency_guru/conversations';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXhpZS5haS9wcm9kIiwiYXVkIjoiaHR0cHM6Ly9maXhpZS5haSIsInN1YiI6IjcwIn0.PUiMHRf7AU2Pa70TB5v17VKBsFgdkEs5_oo-rzka01c'; // T-58 put in .env

export const useCurrencyGuru = () => {
  const [data, setData] = useState<FixieResponse | undefined>();

  const onNext = useCallback(async (res: { json: () => FixieResponse }) => {
    const data = await res.json();
    setData(data);
  }, [setData]);
  useStream('http://myserver.io/stream', {onNext});

  const postMessage = (s: string) => {
    //
  };

  return { data, postMessage };
};

function testFetch() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXhpZS5haS9wcm9kIiwiYXVkIjoiaHR0cHM6Ly9maXhpZS5haSIsInN1YiI6IjcwIn0.PUiMHRf7AU2Pa70TB5v17VKBsFgdkEs5_oo-rzka01c'
  );

  var raw = JSON.stringify({
    generationParams: {
      model: null,
      modelProvider: 'openai',
      userTimeZoneOffset: 420
    },
    message: 'Hello! Tell me about yourself.'
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var promise = Promise.race([
    fetch(
      'https://api.fixie.ai/api/v1/agents/swards/currency_guru/conversations',
      requestOptions
    ).then((response) => response.text()),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 60000)
    )
  ]);

  promise.then((result) => console.log(result)),
    promise.catch((error) => console.log(error));
}

