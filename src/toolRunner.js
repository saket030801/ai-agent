import { generateImage } from "./tools/generateImage.js";
import { reddit } from "./tools/reddit.js";
import { dadJoke } from "./tools/dadJoke.js";


export const runTool = async (toolCall, userMessage) => {
    const input = {
        userMessage,
        toolArgs: JSON.parse(toolCall.function.arguments)
    }

    switch (toolCall.function.name){
        case 'generate_image':
            const image = await generateImage(input)
            return image
        case 'dad_joke':
            return dadJoke(input);
        case 'reddit':
            return reddit(input);
            
        default:
            throw new Error(`Unknown tool: ${toolCall.function.name}`)    
    }
}