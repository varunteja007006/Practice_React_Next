import { motion, AnimatePresence } from "framer-motion";
import { React, useState } from "react";
import Modal from "./modal";
import CodeBlock from "../../../old-repo/Practice React/src/components/CodeBlock";

function LearnFramer() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <CodeBlock
      heading={"Learn Framer Motion for React 💙"}
      explanation={`Framer library to help in animation, effects, etc.`}
    >
      <div className="flex flex-col">
        <h1 className="mb-3 text-2xl"></h1>
        {/* Button with framer animations 😀 */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 border-2 border-pink-600 rounded-full w-fit bg-fuchsia-400"
          onClick={() => (modalOpen ? close() : open())}
        >
          Helloo 😁
        </motion.button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              onClick={close}
              text={"Hello There!!!"}
            />
          )}
        </AnimatePresence>
      </div>
    </CodeBlock>
  );
}

export default LearnFramer;
