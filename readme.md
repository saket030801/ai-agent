Tools -> These are functions that we pass to the model which then returns the answer to the model and model returns that answet to us

In this we have passed get_weather function to the model, which means that when we ask the model what is the weather the model will call the get_weather function.

One thing to keep in mind is that when we after calling a tool the next input to the llm should be the answer of that tool.



- gpt tokenizer -> used to calculate tokens.



the ai either returns tool_calls or content in response.
if it is response it means that the AI is ready with the answer.
If it is tool_calls it means the AI has called a function.