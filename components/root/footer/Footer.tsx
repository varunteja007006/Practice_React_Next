import * as React from "react";
import ContactIcons from "../home/contact-icons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-10 items-center justify-between p-10 dark:bg-black dark:border-black bg-blue-100 border-t-2 border-t-blue-200">
      <ContactIcons />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p>{`-- Made with React💙 --`}</p>

        <p>{`< Developer />`}</p>

        <p>{`-- Varun Teja K --`}</p>
      </div>
    </footer>
  );
}
