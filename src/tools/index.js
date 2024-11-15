import { generateImageToolDefinition } from "./generateImage.js";
import { dadJokeToolDefinition } from "./dadJoke.js";
import { redditToolDefination } from "./reddit.js";


export const tools = [
    generateImageToolDefinition,
    redditToolDefination,
    dadJokeToolDefinition
]

