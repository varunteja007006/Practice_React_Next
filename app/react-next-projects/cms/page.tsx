import React from "react";
import CmsMain from "./cms-main";

export default function page() {
  const tokens = {
    ACCESS_KEY: process.env.CONTENTFUL_ACCESS_TOKEN,
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  };

  return <CmsMain tokens={tokens} />;
}
