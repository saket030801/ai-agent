
import fetch from 'node-fetch'
import { z } from 'zod'; 

export const dadJokeToolDefinition = {
    name: 'dad_joke',
    parameters: z.object({})
}


export async function dadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers:{
            Accept: 'application/json'
        }
    })

    const data = await res.json();

    return data.joke;
}

