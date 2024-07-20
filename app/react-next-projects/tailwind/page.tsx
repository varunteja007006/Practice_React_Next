import TailwindPage from "@/components/root/react-next-projects/tailwind/react-slick-tailwind";
import React from "react";

export default function page() {
  return (
    <div className="p-2 lg:px-10 lg:py-4">
      <section className="space-y-4">
        <h2 className="text-xl">Tailwind based react slick - ONLY CSS</h2>
        <div>
          <TailwindPage />
        </div>
      </section>
    </div>
  );
}
