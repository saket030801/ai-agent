import { runLLM } from "./llm.js";
import { z } from "zod"; 
import { addMessages, getMessages, saveToolResponse } from "./memory.js";
import { logMessage, showLoader } from "./ui.js";
import { runTool } from "./toolRunner.js";


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
        const toolCall = response.tool_calls[0]
        loader.update(`executing: ${toolCall.function.name}`)
        
        const toolResponse = await runTool(toolCall, userMessage)
        await saveToolResponse(toolCall.id, toolResponse)

        loader.update(`executed: ${toolCall.function.name}`)
    }

    logMessage(response);
    loader.stop();

    return getMessages()

}
