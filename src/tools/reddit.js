import {z} from 'zod'


const SUBREDDIT_NAME = "nba"


export const redditToolDefination = {
    name: 'reddit',
    parameters: z.object({}).describe(
        'Use this tool to get the latest posts from reddit. It will return a JSON object with the title, link, subreddit, author, and upvotes of each post.'
    )
}


export async function reddit({toolArgs, userMessage}){
    const response = await fetch(`https://www.reddit.com/r/${SUBREDDIT_NAME}/.json`,{
        headers:{
        }
    });
    // console.log(`first response ${response}`);
    const {data} = await response.json();
    // console.log(`second response ${data}`)

    const relevantInfo = data.children.map((child) => ({
        title: child.data.title,
        link: child.data.url,
        subreddit: child.data.subreddit_name_prefixed,
        author: child.data.author,
        upvotes: child.data.ups
    }))

    // console.log(relevantInfo)

    return JSON.stringify(relevantInfo, null, 2)
}

