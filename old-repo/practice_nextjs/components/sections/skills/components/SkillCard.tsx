import React, { ElementType } from "react";

function SkillCard(props: { name: string; Icon: ElementType }) {
  const { name, Icon } = { ...props };
  return (
    <div className="flex flex-row items-center gap-2">
      <Icon className="text-4xl" />
      {name}
    </div>
  );
}

export default SkillCard;
