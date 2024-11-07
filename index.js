
import {runLLM} from './src/llm.js'

const userMessage = process.argv[2];

if(!userMessage){
    console.error("Please provide a message")
    process.exit(1);
}

const response = await runLLM({
    messages: [{role: 'user', content: userMessage}]
})

console.log(response);
