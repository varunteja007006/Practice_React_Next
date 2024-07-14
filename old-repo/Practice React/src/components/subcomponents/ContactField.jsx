import React from "react";

function ContactField({ phone, handlePhone }) {
  return (
    <input
      type="tel"
      name="phonenumber"
      id="phonenumber"
      placeholder="contact"
      value={phone}
      className="p-3"
      onChange={handlePhone}
    />
  );
}

export default ContactField;
