import {z} from 'zod'


const SUBREDDIT_NAME = "aww"


export const redditToolDefination = {
    name: 'reddit',
    parameters: z.object({}).describe(
        'Use this tool to get the latest posts from reddit. It will return a JSON object with the title, link, subreddit, author, and upvotes of each post.'
    )
}


export async function reddit({toolArgs, userMessage}){
    const response = await fetch(`https://www.reddit.com/r/${SUBREDDIT_NAME}/.json`,{
        headers:{
        "cookie": "edgebucket=icfKes4uZrd6NH8gQW; csv=2; reddit_session=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpsVFdYNlFVUEloWktaRG1rR0pVd1gvdWNFK01BSjBYRE12RU1kNzVxTXQ4IiwidHlwIjoiSldUIn0.eyJzdWIiOiJ0Ml8xY21pczhteWl5IiwiZXhwIjoxNzQ3MjkyMjM0Ljk0NjAyMSwiaWF0IjoxNzMxNjUzODM0Ljk0NjAyMSwianRpIjoibkJadXBnN2FNa0EtTmdyNHBmNlNubWRONzlnekFnIiwiY2lkIjoiY29va2llIiwibGNhIjoxNzMxMTc2MjYxOTYzLCJzY3AiOiJlSnlLamdVRUFBRF9fd0VWQUxrIiwidjEiOiIxMzcxNzgxNzY4MTEwODIsMjAyNC0xMS0xNVQwNjo1NzoxNCxiOWJkMjZiYzdhMDc5MGE1YTUzNDgwNTI0MzI3ZmRhNzBkMDY0NmE1IiwiZmxvIjoyfQ.gLov_ae0HCe0ywIqCzg1Jgsmnam5rELhnSg9t3cf2uzB6BP9_5fID6BU81OLWOBF6ODoxdPaRzozximYMkx2EF-_lWnP4iloI9WxKIjZw8A2_b3eJyWBw7xEJW0z2ZRUCZx_ZlicMKsaJ1Zyz_TT28QQThED7U3qzvUuhk8n3oexutoY8k9m9rwPENCZwJj6jKrPg5w9lgaiwBEkQbvveXc94KjmmdyFTDXhl1_1j9jvliKMDdnGU5rwRHnR0M7xbljx5STn-NLlf3_zFqvtYv9EHd594L0tsMZgmumu398Lb4423VbmkBKylrqS1KlqLJwW4u9MZQDMGtDiKXkDXg; loid=000000001cmis8myiy.2.1731176261963.Z0FBQUFBQm5OdkRNVWUtVjRJOW9fSzI2Y2ZGM1R3dzh2Mm4wYVhCYVRQdnk5ZGMtbHQwM3lUM2x3d2s5dWVsWW9UNUZmNUt2MnZZaWlBbnBCcHlLbUZRSFNuNVJaNXhtbC1SWm9MUjk3Ty1QejlHd0Nnb1VQcUJwX09vZjJtYjhtTG1sMUM0QlhjZVU; theme=2; pc=pw; __stripe_mid=e0c162e4-1d4e-4d44-8200-025ac04164d5041997; recent_srs=t5_2u624%2C; t2_1cmis8myiy_recentclicks3=t3_1gn93cj%2Ct3_1ea26m6%2Ct3_1e5z1f9%2Ct3_1gkpwb8%2Ct3_iy3elq%2Ct3_1fhiha4%2Ct3_1gm616q%2Ct3_1gslmqj%2Ct3_1gssm33%2Ct3_1gsrb49; session_tracker=qpjcqifraqibpgrdph.0.1731845199485.Z0FBQUFBQm5PZHhQSURETnFMQWZhTUx3Rk1PUXpfb04xX05EM3VvTHVpZ3c0SXptZHB4TjM5WUlYeTEzTE01NUNsQmhOSUMtZGlEaVhNUzVVYmpsODN3Um5IZHRfdG83OS1NTmNJS1pGeTJYaUVUdmRuT3NFRWRTMmZ1SzB1QVp6X1ZDWFE4SEs2TWQ; token_v2=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzMxOTMxNTk5LjQ4MDkzOSwiaWF0IjoxNzMxODQ1MTk5LjQ4MDkzOSwianRpIjoiY0xuc3RzcDVHM2F6UGJrVGwzdTFyZENzMm81cFhBIiwiY2lkIjoiOXRMb0Ywc29wNVJKZ0EiLCJsaWQiOiJ0Ml8xY21pczhteWl5IiwiYWlkIjoidDJfMWNtaXM4bXlpeSIsImxjYSI6MTczMTE3NjI2MTk2Mywic2NwIjoiZUp4a2tkR090REFJaGQtbDF6N0JfeXBfTmh0c2NZYXNMUWFvazNuN0RWb2NrNzA3Y0w0aUhQOG5LSXFGTEUydUJLR2tLV0VGV3RPVU5pTHY1OHk5T1pFRlN5RlRSODQzeXdva2FVcFBVbU41cHlsUndXWmtMbGZhc1VLREI2WXBWUzZaMjBLUFM1dlEzSTFGejA2TXFseFdIdFRZbzNKcGJHTUsyeFBqemNacVF5cXV5NmxNWUZrb244V0xmdnlHLXRZLWY3YmZoSFl3cktnS0RfVE91Rnh3WV9IREZIYl9ucHIwYkYyd3FMM1hnOVEtMS1OMjdiTm1vZG01X1Z6UHZ6YVNjVG1HNWlmWXY3dC1DUjE0NUhtWlVRY3dZZzBfeXJBajZfQ3ZPb0RLQlFXTUpZaFBJNUFybDJfX0pkaXVUZjhhdHlkLS1HYkVUV180clJtbzV4TEVvVV9qNnpjQUFQX19YRF9lNHciLCJyY2lkIjoiTkFoTTBtTTlFd01EdGhNdjlyS1B1a2Q4WFg3WENNTTR5a183QjlBVW5NYyIsImZsbyI6Mn0.NFeNxbaWAqFFpS8tbxLhxpPSX9LIHAAEiLM_pTgGhqLfBHXwQdHMSKOpL-tI6m5rIBkQsFu7yaovCuv6I7lnzgCapm9-j5GxBqhokfJ-XU147jN3erRjj_MCBREQn8e9K2ajJig1kPDICeWqicz6r66llKx0DeOnQUYF3JGeLxZaEPHGYiynPCuNjaX63pt4dxXbC-vqzRf_5-n3L82rGgos6Qgz50nU260M21CI2bL4-ypunKW3bM6m-_eafmdpZaSG0SKL57xYk33cdcnZtmAr_e_EQHYcqZt8rkvzZSsHhAsBYmBp139n2oJsh8HE2eWyQQ749c97_TUbR2AgEQ"
        }
    })
    const {data} = await response.json();

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

