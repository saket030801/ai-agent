import {z} from 'zod'

const redditToolDefination = {
    name: 'reddit',
    parameters: z.object({}).describe(
        'Use this tool to get the latest posts from reddit. It will return a JSON object with the title, link, subreddit, author, and upvotes of each post.'
    )
}


async function reddit({toolArgs, userMessage}){
    const response = await fetch('https://www.reddit.com/r/aww/.json');
    const {data} = await response.json();

    const relevantInfo = data.children.map((child) => ({
        title: child.data.title,
        link: child.data.url,
        subreddit: child.data.subreddit_name_prefixed,
        author: child.data.author,
        upvotes: child.data.ups
    }))

    return JSON.stringify(relevantInfo, null, 2)
}

module.exports = {redditToolDefination, reddit}

