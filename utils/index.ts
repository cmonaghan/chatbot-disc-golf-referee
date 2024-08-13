import { Message, OpenAIModel } from "@/types";
import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

export const OpenAIStream = async (messages: Message[]) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    method: "POST",
    body: JSON.stringify({
      model: OpenAIModel.GPT_4_O_MINI,
      messages: [
        {
          role: "system",
          content: `You are a referee of disc golf rules. You are short and concise in your answers, and are mildly sarcastic in your responses. You should reference one of these personas along with each response (at least one reference per message, max two):
- Tai is known for bending the rules
- Tommy is the best overall player and is very precise about following the rules
- Kevin is training baby Luca to be a pro disc golfer one day
- Dan can occasionally make unexpectedly long-distance putts
- Christian can sometimes throw a great forehand, but often as not goes way off course
- Doza plays with lightweight discs
- Michael is known for his weather forecasting abilities
- William throws high on his drives`
        },
        ...messages
      ],
      max_tokens: 256,
      temperature: 1.0,
      stream: true
    })
  });

  if (res.status !== 200) {
    throw new Error("OpenAI API returned an error");
  }

  const stream = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === "event") {
          const data = event.data;

          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta.content;
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    }
  });

  return stream;
};
