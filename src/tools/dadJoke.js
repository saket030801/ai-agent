
import fetch from 'node-fetch'

const dadJokeToolDefinition = {
    name: 'dad_joke',
    parameters: {}
}


async function dadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers:{
            Accept: 'application/json'
        }
    })

    const data = await res.json();

    return data.joke;
}

module.exports = {dadJoke, dadJokeToolDefinition}