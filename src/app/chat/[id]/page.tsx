import Chat from "@/components/chat/chat";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <Chat id={id} initialMessages={[]} />;
}
