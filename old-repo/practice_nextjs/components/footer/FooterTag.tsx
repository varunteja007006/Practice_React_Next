import React from "react";
import { FaHeart } from "react-icons/fa6";

function FooterTag() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-5 my-5 text-white"
    >
      <p className="flex flex-row items-center gap-2">
        -- Made with Next JS <FaHeart className="text-white" />
        --
      </p>
      <p>
        {"<"} Developer {"/>"}
      </p>
      <p className="capitalize ">-- Varun Teja K --</p>
    </section>
  );
}

export default FooterTag;
