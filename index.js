
import { runAgent } from './src/agent.js';
import { tools } from './src/tools/index.js';

const userMessage = process.argv[2];

if(!userMessage){
    console.error("Please provide a message")
    process.exit(1);
}


const response = await runAgent({userMessage, tools})
