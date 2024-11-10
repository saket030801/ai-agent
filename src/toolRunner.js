const getWeather = () => "Very cold, 17deg";

export const runTool = async (toolCall, userMessage) => {
    const input = {
        userMessage,
        toolArgs: JSON.parse(toolCall.function.arguments)
    }

    switch (toolCall.function.name){
        case 'weather':
            return getWeather();
        
        default:
            throw new Error(`Unknown tool call: ${toolCall.function.name}`);
                
    }
}