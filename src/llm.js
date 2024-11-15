import { openai } from "./ai.js";
import { zodFunction } from "openai/helpers/zod.mjs";
export const runLLM = async ({
    model = 'gpt-4o-mini',
    messages,
    temperature= 0.1,
    tools = []
}) => {
    const formattedTools = tools.map((tool) => zodFunction(tool))
    const response = await openai.chat.completions.create({
        model,
        messages,
        temperature,
        tools: formattedTools,
        tool_choice:'auto',
        parallel_tool_calls : false
    });

    return response.choices[0].message;
}

