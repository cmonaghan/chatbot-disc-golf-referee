# Disc Golf Referee Chatbot

A simple chatbot using Next.js, TypeScript, and Tailwind CSS. Built using https://github.com/mckaywrigley/chatbot-ui-lite.

![Disc Golf Oracle](./public/screenshot.png)

## Features

Chatbot UI Lite provides a simple, fully-functional chat interface that you can use to start building your own chatbot apps powered by OpenAI.

It has everything you need to hit the ground running.

Modify the chat interface in `components/Chat`.

Tweak the system prompt in `utils/index.ts`.

Tweak the assistant prompt in `pages/index.tsx`.

## Deploy

**Vercel**

Host your own live version of Chatbot UI Lite with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmckaywrigley%2Fchatbot-ui-lite&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key%20needed%20for%20chat.&envLink=https%3A%2F%2Fopenai.com%2Fproduct&project-name=chatbot-ui-lite&repository-name=chatbot-ui-lite)

**Replit**

Fork Chatbot UI on Replit [here](https://replit.com/@MckayWrigley/chatbot-ui).

## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/mckaywrigley/chatbot-ui-lite.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide OpenAI API Key**

Create a .env.local file in the root of the repo with your OpenAI API Key:

```bash
OPENAI_API_KEY=<YOUR_KEY>
```

**4. Run App**

```bash
npm run dev
```

**5. Start Building**

You should be able to start chatting with the bot.

Now, go build the app into whatever kind of chatbot you want!

## Contact

If you have any questions, feel free to reach out to me on [Twitter](https://twitter.com/mckaywrigley).
