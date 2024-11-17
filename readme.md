# AI Command-Line Agent 🚀

A Node.js-powered AI agent that can perform fun and practical tasks directly from your terminal.

## Features
- **Image Generator**: Create visuals using DALL-E 3.
- **Random Reddit Post**: Fetch a post from any subreddit.
- **Dad Joke Generator**: Get a random dad joke for a quick laugh.

---

## 🛠️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 14 or higher)
- An [OpenAI API key](https://platform.openai.com/)

### Steps
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/saket030801/ai-agent.git
   cd ai-agent
   npm install   
   ```
2. **Create a .env file in the root directory with the following content:**
   ```bash
   OPENAI_API_KEY = "<Your API Key>"
   ```
3. **Run the Application**
   ```bash
   node index.js "<Your Prompt to the agent>"
   ```

---


## Example

Prompt -> "Make a dad joke and generate an meme image using it".

![Meme Image](https://oaidalleapiprodscus.blob.core.windows.net/private/org-DhRyH23zGXq7WXzs6TYih5dA/user-NObsI7AB3qsTX9V1oxlaeJUf/img-Rl7857UNxGMg3vHHFgUkOB3t.png?st=2024-11-17T16%3A20%3A28Z&se=2024-11-17T18%3A20%3A28Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-17T07%3A40%3A15Z&ske=2024-11-18T07%3A40%3A15Z&sks=b&skv=2024-08-04&sig=IdMezKJPEkQu%2Ba/B4B9Wf2CA1usOmoH9J0F4pUcIdK8%3D)

## Note

1. Make sure that you have allowed the models in the OpenAI API settings [Allow Models](https://platform.openai.com/settings/proj_CnvtUnzWKTNdvPSUKuZbZvUd/limits)

2. You can change the subreddit name in reddit.js file in the tools directory.

3. Also if let's say there is error in the response, try to empty the message array in db.json.






