import React from "react";
import contactData from "../../data/contactData";
import CustomHeading from "@/components/ui/custom/CustomHeading";

function ContactPage() {
  return (
    <section id="contact" className="mt-16">
      <CustomHeading className="mb-10">Contact Me</CustomHeading>
      <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
        {contactData.map((item) => {
          return (
            <a
              key={item.id}
              className={`tooltip
              }`}
              href={item.contact_href}
              data-tip={item.contact_type}
              aria-label={item.contact_href}
            >
              <span className="flex flex-col items-start justify-center gap-3">
                <span className="flex flex-row items-center gap-3 capitalize">
                  <span className="text-base">{<item.contact_icon />}</span>
                  {item.contact_type}
                </span>
                <span className="text-sm">{item.contact_value}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ContactPage;
