import { runLLM } from "./llm.js";
import { z } from "zod"; 
import { addMessages, getMessages } from "./memory.js";
import { logMessage, showLoader } from "./ui.js";


export const runAgent = async ({userMessage,tools}) => {
    
    await addMessages([
        {
            role: 'user',
            content: userMessage
        }
    ])

    const loader = showLoader('Thinking...')

    const history = await getMessages()
    const response = await runLLM({
        messages: history,
        tools
    })
    if(response.tool_calls){
        console.log(response.tool_calls)
    }

    await addMessages([{role:"assistant", content:response}])

    logMessage(response);
    loader.stop();

    return getMessages()

}

