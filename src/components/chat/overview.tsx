/** Originally from `vercel/ai-chatbot`
 * @link https://github.com/vercel/ai-chatbot/blob/main/src/components/chat/overview.tsx
 */

import { motion } from "framer-motion";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="mx-auto max-w-3xl md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      hello world
    </motion.div>
  );
};
