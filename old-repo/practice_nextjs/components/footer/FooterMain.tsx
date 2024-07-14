import React from "react";
import FooterTag from "./FooterTag";
import contactData from "../../data/contactData";
import { Button } from "../ui/button";

export const ContactBtn = () => {
  return (
    <div className="flex flex-row gap-10 justify-center items-center text-white">
      {contactData.map((item, index) => {
        return (
          <Button
            variant={"ghost"}
            size="icon"
            className=" rounded-full"
            asChild
          >
            <a
              key={index}
              href={item.contact_href}
              data-tip={item.contact_type}
              aria-label={item.contact_href}
            >
              {<item.contact_icon className="w-6 h-6" />}
            </a>
          </Button>
        );
      })}
    </div>
  );
};

function FooterMain() {
  return (
    <footer className="py-5">
      <ContactBtn />
      <FooterTag />
    </footer>
  );
}

export default FooterMain;
