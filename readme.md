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

## Note

1. Make sure that you have allowed the models(gpt-4o-mini, dall-e-3) in the OpenAI API settings [Allow Models](https://platform.openai.com/settings/proj_CnvtUnzWKTNdvPSUKuZbZvUd/limits)

2. You can change the subreddit name in the reddit.js file in the tools directory.

3. If there is an error in the response, try emptying the message array in db.json.


