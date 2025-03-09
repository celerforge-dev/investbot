/** Originally from `vercel/ai-chatbot`
 * https://github.com/vercel/ai-chatbot/blob/main/components/chat.tsx
 */

"use client";

import { Messages } from "@/components/chat/messages";
import { MultimodalInput } from "@/components/chat/multimodal-input";
import { generateUUID } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import type { Attachment, Message } from "ai";
import { useState } from "react";
import { toast } from "sonner";

export default function Chat({
  id,
  initialMessages,
}: {
  id: string;
  initialMessages: Message[];
}) {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    reload,
  } = useChat({
    id,
    initialMessages,
    generateId: generateUUID,
    onError: () => {
      toast.error("An error occured, please try again!");
    },
  });
  const [attachments, setAttachments] = useState<Array<Attachment>>([]);
  return (
    <div className="bg-background flex h-[calc(100vh-60px)] min-w-0 flex-col">
      <Messages
        chatId={id}
        isLoading={isLoading}
        messages={messages}
        setMessages={setMessages}
        reload={reload}
        isReadonly={false}
        isArtifactVisible={false}
      />
      <form className="bg-background mx-auto flex w-full gap-2 px-4 pb-4 md:max-w-3xl md:pb-6">
        <MultimodalInput
          chatId={id}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          stop={stop}
          messages={messages}
          setMessages={setMessages}
          append={append}
          attachments={attachments}
          setAttachments={setAttachments}
        />
      </form>
    </div>
  );
}
