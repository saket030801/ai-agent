
import {runLLM} from './src/llm.js'
import { addMessages, getMessages } from './src/memory.js';

const userMessage = process.argv[2];

if(!userMessage){
    console.error("Please provide a message")
    process.exit(1);
}

await addMessages([{role:"user", content:userMessage}])
const messages = await getMessages();
const response = await runLLM({
    messages: [...messages]
})

await addMessages([{role:"assistant", content:response}])

console.log(response);
