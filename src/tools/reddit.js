import {z} from 'zod'

export const redditToolDefination = {
    name: 'reddit',
    parameters: z.object({}).describe(
        'Use this tool to get the latest posts from reddit. It will return a JSON object with the title, link, subreddit, author, and upvotes of each post.'
    )
}


export async function reddit({toolArgs, userMessage}){
    const response = await fetch("https://www.reddit.com/r/aww/.json", {
        "headers": {
          "cookie": "edgebucket=icfKes4uZrd6NH8gQW; csv=2; reddit_session=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpsVFdYNlFVUEloWktaRG1rR0pVd1gvdWNFK01BSjBYRE12RU1kNzVxTXQ4IiwidHlwIjoiSldUIn0.eyJzdWIiOiJ0Ml8xY21pczhteWl5IiwiZXhwIjoxNzQ3MjkyMjM0Ljk0NjAyMSwiaWF0IjoxNzMxNjUzODM0Ljk0NjAyMSwianRpIjoibkJadXBnN2FNa0EtTmdyNHBmNlNubWRONzlnekFnIiwiY2lkIjoiY29va2llIiwibGNhIjoxNzMxMTc2MjYxOTYzLCJzY3AiOiJlSnlLamdVRUFBRF9fd0VWQUxrIiwidjEiOiIxMzcxNzgxNzY4MTEwODIsMjAyNC0xMS0xNVQwNjo1NzoxNCxiOWJkMjZiYzdhMDc5MGE1YTUzNDgwNTI0MzI3ZmRhNzBkMDY0NmE1IiwiZmxvIjoyfQ.gLov_ae0HCe0ywIqCzg1Jgsmnam5rELhnSg9t3cf2uzB6BP9_5fID6BU81OLWOBF6ODoxdPaRzozximYMkx2EF-_lWnP4iloI9WxKIjZw8A2_b3eJyWBw7xEJW0z2ZRUCZx_ZlicMKsaJ1Zyz_TT28QQThED7U3qzvUuhk8n3oexutoY8k9m9rwPENCZwJj6jKrPg5w9lgaiwBEkQbvveXc94KjmmdyFTDXhl1_1j9jvliKMDdnGU5rwRHnR0M7xbljx5STn-NLlf3_zFqvtYv9EHd594L0tsMZgmumu398Lb4423VbmkBKylrqS1KlqLJwW4u9MZQDMGtDiKXkDXg; loid=000000001cmis8myiy.2.1731176261963.Z0FBQUFBQm5OdkRNVWUtVjRJOW9fSzI2Y2ZGM1R3dzh2Mm4wYVhCYVRQdnk5ZGMtbHQwM3lUM2x3d2s5dWVsWW9UNUZmNUt2MnZZaWlBbnBCcHlLbUZRSFNuNVJaNXhtbC1SWm9MUjk3Ty1QejlHd0Nnb1VQcUJwX09vZjJtYjhtTG1sMUM0QlhjZVU; token_v2=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzMxNzQwMjM2LjM4OTM0NSwiaWF0IjoxNzMxNjUzODM2LjM4OTM0NSwianRpIjoiWUlyaURMTTJQZk9Lb2x1WDhrQUFmZXdPM2RrV0tBIiwiY2lkIjoiMFItV0FNaHVvby1NeVEiLCJsaWQiOiJ0Ml8xY21pczhteWl5IiwiYWlkIjoidDJfMWNtaXM4bXlpeSIsImxjYSI6MTczMTE3NjI2MTk2Mywic2NwIjoiZUp4a2tkR090REFJaGQtbDF6N0JfeXBfTmh0c2NZYXNMUWFvazNuN0RWb2NrNzA3Y0w0aUhQOG5LSXFGTEUydUJLR2tLV0VGV3RPVU5pTHY1OHk5T1pFRlN5RlRSODQzeXdva2FVcFBVbU41cHlsUndXWmtMbGZhc1VLREI2WXBWUzZaMjBLUFM1dlEzSTFGejA2TXFseFdIdFRZbzNKcGJHTUsyeFBqemNacVF5cXV5NmxNWUZrb244V0xmdnlHLXRZLWY3YmZoSFl3cktnS0RfVE91Rnh3WV9IREZIYl9ucHIwYkYyd3FMM1hnOVEtMS1OMjdiTm1vZG01X1Z6UHZ6YVNjVG1HNWlmWXY3dC1DUjE0NUhtWlVRY3dZZzBfeXJBajZfQ3ZPb0RLQlFXTUpZaFBJNUFybDJfX0pkaXVUZjhhdHlkLS1HYkVUV180clJtbzV4TEVvVV9qNnpjQUFQX19YRF9lNHciLCJyY2lkIjoiTkFoTTBtTTlFd01EdGhNdjlyS1B1a2Q4WFg3WENNTTR5a183QjlBVW5NYyIsImZsbyI6Mn0.Np3IsvKvGJZ5Agb1dEkl6no1EkemfCrjgGBwmaqtilRvjBaff2o-02Rm4zKfxyifMOT4uDtn7ZrqA_tLgf9CAO1l3Yu-nGHtHKK30Vno9MrIn-HNBXVDDgVuDBj-zuJsQi-dYp475w9OCA8fBaAJMvTK_zfBpYE07UmRIvSXpNKTUWDUYrspe6MFvTE0ME5FPwdwzLQP2iGT8NNuoFeHaG_Me2YwgEu4ZJ3AbcYHkuHhnq0Qs6Ou339lbnbTYjKHA7It3Us817UyLZFWX4vLc7MlVv6N6WJhzRFB3JQw4OBBdl98Ve1lwfu7onB0E2qVgPYiQzIOw7AYdVx8B3tOgg; reddit_chat_view=closed; theme=2; t2_1cmis8myiy_recentclicks3=t3_1e6tp3p%2Ct3_1eumoi7%2Ct3_1eqpgyp%2Ct3_155eu3a%2Ct3_1dwtlbw%2Ct3_1goxawv; csrf_token=d0abe047163d4bdf6cea3c9b14e24f96; session_tracker=rfcjrpbgbejpqeagqi.0.1731696723128.Z0FBQUFBQm5ONWhUMTIzeG1IVjE3T0I2V0taTkc0QTNrN0NrZ3YxblROcjhTX3FhNlJtazRoRkxMOS1LY1dZc1RXYVVicE9ZTS0xNzBxY0t3RXA2Q0hHYTJaSTRnSjl1SnpDMlBtSEk0UUVSWGNxX0lHQldsUU1UdnhWQlpHNU04ajFDOUNpd3FXWXY"
        },
        
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


