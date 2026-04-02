'use client';

import { useEffect, useState } from "react";    

export default function JokeFetcher() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => { 
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
        <p>{joke || "Loading joke..."}</p>
        <div>
            <button onClick={fetchJoke} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Fetch New Joke
            </button>
        </div>
    </div>
    );
}