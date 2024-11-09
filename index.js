
import { z } from 'zod';
import { runAgent } from './src/agent.js';

const userMessage = process.argv[2];

if(!userMessage){
    console.error("Please provide a message")
    process.exit(1);
}

const weatherTools = {
    name: "get_weather",
    description: "use this to get weather",
    parameters: z.object({})
}

const response = await runAgent({userMessage, tools:[weatherTools]})


console.log(response);
