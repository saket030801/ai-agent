import { openai } from "./ai.js";

export const runLLM = async ({
    model = 'gpt-4o-mini',
    messages,
    temperature= 0.1
}) => {
    const response = await openai.chat.completions.create({
        model,
        messages,
        temperature
    });

    return response.choices[0].message.content;
}

