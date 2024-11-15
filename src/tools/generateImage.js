import {openai} from '../ai.js'
import { z } from 'zod'

export const generateImageToolDefinition = {
    name: 'generate_image',
    parameters: z
    .object({
      prompt: z
        .string()
        .describe(
          'The prompt to use to generate the image with a diffusion model image generator like Dall-E'
        ),
    })
    .describe('Generates an image and returns the url of the image.'),
}

export const generateImage = async ({toolArgs, userMessage}) => {
    try{
        const response = await openai.images.generate({
            model: 'dall-e-3',
            prompt: toolArgs.prompt,
            n: 1,
            size: '1024x1024'
        })

        const imageUrl = response.data[0].url
        return imageUrl
    }catch(error){
        console.log('Error generating image:', error)
        throw new Error('Failed to generate image')
    }

}