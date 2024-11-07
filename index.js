import OpenAI from "openai";

const openai = new OpenAI({apiKey:""});
//const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

async function completion() {
    
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Write a haiku that explains the concept of recursion."
            }
        ]
    })

    console.log(response.choices[0].message.content)
}

completion()
